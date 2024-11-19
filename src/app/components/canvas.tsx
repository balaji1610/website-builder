"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import plugin from "grapesjs-blocks-basic";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";
import Logout from "./logout";
import { useApplicationContext } from "../context/applicationContext";
import userservice from "@/app/userservice/userservice";
import { userRecordType, templateType } from "@/app/interface/interface";

export default function Canvas() {
  const router = useRouter();
  const {
    selectedTemplate,
    userRecord,
    isTokenValid,
    setIsTokenValid,
    isActionLoading,
    setIsActionLoading,
  } = useApplicationContext();

  const { updateTemplate } = userservice();

  const [afterSaveTemplate, setAfterSaveTemplate] = useState(
    selectedTemplate?.template
  );
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const savePage = async (template: string) => {
    setAfterSaveTemplate(template);
    const saveTemplate = userRecord.map((el: userRecordType) => {
      const prepareTemplate = el.templates.flat().map((item: any) => {
        const { _id } = selectedTemplate as templateType;
        return item._id == _id
          ? { ...item, ["template"]: template, ["lastUpdated"]: now }
          : item;
      });
      return { ...el, templates: prepareTemplate };
    });
    updateTemplate(saveTemplate[0] as userRecordType);
  };

  useEffect(() => {
    if (isTokenValid) {
      const editor = grapesjs.init({
        container: "#gjs",
        height: "700px",
        width: "100%",
        storageManager: false,
        plugins: ["gjs-preset-webpage", plugin],
        deviceManager: {
          devices: [
            {
              id: "desktop",
              name: "Desktop",
              width: "",
            },
            {
              id: "tablet",
              name: "Tablet",
              width: "768px",
              widthMedia: "992px",
            },
            {
              id: "mobilePortrait",
              name: "Mobile portrait",
              width: "320px",
              widthMedia: "575px",
            },
          ],
        },
        pluginsOpts: {
          "grapesjs-preset-webpage": {
            blocksBasicOpts: {
              blocks: [
                "column1",
                "column2",
                "column3",
                "column3-7",
                "text",
                "link",
                "image",
                "video",
              ],
              flexGrid: 1,
            },
            blocks: ["link-block", "quote", "text-basic"],
          },
          thePlugin: {
            addExportBtn: true,
            btnLabel: "Export",
          },
        },
        canvas: {
          styles: [
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
            "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
          ],
          scripts: [
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
            "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
            "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js",
          ],
        },
      });

      editor.setComponents(afterSaveTemplate ?? "");

      editor.Panels.addButton("options", {
        id: "custom-button",
        command: "save-page",
        label: isActionLoading
          ? `<button style="cursor: pointer">Loading....</button>`
          : `<button style="cursor: pointer">SAVE</button>`,
        attributes: {
          title: "Save",
        },
      });

      editor.Commands.add("save-page", {
        run(editor) {
          const htmlContent = `
<html>
  <head>
    <style>${editor.getCss()}</style>
  </head>
  <body>${editor.getHtml()}</body>
</html>
`;
          savePage(htmlContent);
        },
      });
    } else if (isTokenValid == false) {
      toast.error("Unauthorized Route");
      setIsTokenValid(null);
      setTimeout(() => {
        router.push("./");
      }, 2000);
    }

    /* eslint-disable */
  }, [setIsTokenValid, isTokenValid, isActionLoading]);

  return (
    <>
      {isTokenValid ? (
        <>
          {" "}
          <Logout />
          <div id="gjs"></div>
          <ToastContainer position="top-right" autoClose={2000} />
        </>
      ) : (
        <>
          <ToastContainer position="top-center" autoClose={2000} />
        </>
      )}
    </>
  );
}
