"use client";
import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import plugin from "grapesjs-blocks-basic";
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logout from "./logout";
import { useApplicationContext } from "../context/applicationContext";
import userservice from "@/app/userservice/userservice";
import { userRecordType, templateType } from "@/app/interface/interface";

export default function Canvas() {
  const { selectedTemplate, userRecord } = useApplicationContext();
  const { updateTemplate } = userservice();

  const savePage = async (template: string) => {
    const saveTemplate = userRecord.map((el: userRecordType) => {
      const prepareTemplate = el.templates.flat().map((item: any) => {
        const { _id } = selectedTemplate as templateType;
        return item._id == _id ? { ...item, ["template"]: template } : item;
      });
      return { ...el, templates: prepareTemplate };
    });
    updateTemplate(saveTemplate[0] as userRecordType);
  };

  useEffect(() => {
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
    const { template } = selectedTemplate as templateType;
    editor.setComponents(template);
    editor.BlockManager.add("bootstrap-Image-Text", {
      label: "Image-Text",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
          <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>`,
      content: `
          <div data-gjs-droppable="true" class="container">
          <div class="col-md-12">
          <div class="row">
          <div class="col-md-6">
            <img src="" alt="Image" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2>Your Content Heading</h2>
            <p>Your content goes here. You can add paragraphs, lists, or any other HTML elements.</p>
          </div>
        </div>
          </div>
        </div>
          `,
    });

    editor.BlockManager.add("bootstrap-Text-Image", {
      label: "Text-Image",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-postcard" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5M10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM13 8h-2V6h2z"/>
        </svg>`,
      content: `
          <div data-gjs-droppable="true" class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>Your Content Heading</h2>
              <p>Your content goes here. You can add paragraphs, lists, or any other HTML elements.</p>
            </div>
            <div class="col-md-6">
            <img src="" alt="Image" class="img-fluid">
          </div>
          </div>
        </div>
          `,
    });

    editor.Components.addType("bootstrap-Heading", {
      model: {
        defaults: {
          tagName: "heading",
          classes: ["h1"],
          components: "Your heading",
          traits: [
            {
              type: "text",
              label: "Text",
              name: "text",
              changeProp: true,
            },
            {
              type: "select",
              label: "heading Style",
              name: "class",
              changeProp: true,
              options: [
                { id: "h1", name: "h1" },
                { id: "h2", name: "h2" },
                { id: "h3", name: "h3" },
                { id: "h4", name: "h4" },
                { id: "h5", name: "h5" },
                { id: "h6", name: "h6" },
              ],
            },
          ],
          text: "Change Text",
        },
        init() {
          this.on("change:class", this.handleClassChange);
          this.on("change:text", this.handleTextChange);
        },
        handleClassChange() {
          const selectedClass = this.get("class");
          this.setClass(selectedClass);
        },
        handleTextChange() {
          const text = this.get("text");
          this.components(text);
        },
      },
    });

    editor.BlockManager.add("bootstrap-Heading", {
      label: "Heading",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-textarea-t" viewBox="0 0 16 16">
          <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
          <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386z"/>
        </svg>`,
      content: { type: "bootstrap-Heading" },
    });

    editor.BlockManager.add("bootstrap-Paragraph", {
      label: "Paragraph",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-p-square" viewBox="0 0 16 16">
          <path d="M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z"/>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
        </svg>`,
      content: `
          <div data-gjs-droppable="true" class="container">
          <div class="col-md-12">
         <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis nulla vitae nibh condimentum pellentesque.
         Donec tempus orci sit amet tristique placerat. Aenean sit amet mauris lectus. Mauris non mauris id neque pretium vulputate in eget orci.
         Suspendisse diam nisi, rhoncus ut malesuada vitae, ornare sed urna. Nunc ligula diam, efficitur vel viverra in, cursus non mauris. Integer sodales quam mi,
         vitae tincidunt lacus gravida ac.
         </div>
        </div>
        </div>
          `,
    });

    editor.BlockManager.add("testimonial", {
      label: "Testimonial",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-chat-right-quote" viewBox="0 0 16 16">
      <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
      <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
    </svg>`,
      content: `<div class="container" style="background-color:#F5F5F7;height:30rem">
          <h1 style="text-align:center;height:4rem;margin-top:1rem;">Testimonial</h1>
          <div class="col-sm-12">
          <div class="row">
          <div class="col-sm-4">
          <div class="card text-center" style="width: 18rem;">
          <div class="card-body">
          <div style="margin:1rem 0 1rem 0;">
          <img src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="Image" class="img-fluid"  width="100px"
          height= "112px" style="border-radius:60px">
          </div>
            <p class="card-text" style="margin:1rem 0 1rem 0;">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”
            </p>
            <h5 class="card-title" style="margin:1rem 0 1rem 0;">Jenny Wilson</h5>
           <p class="card-text" style="margin:1rem 0 1rem 0;">Project Manager at Microsoft</p>
          </div>
        </div>
        </div>
          <div class="col-sm-4"><div class="card text-center" style="width: 18rem;">
          <div class="card-body">
          <div style="margin:1rem 0 1rem 0;">
          <img src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg" alt="Image" class="img-fluid"  width="100px"
          height= "112px" style="border-radius:60px">
          </div>
            <p class="card-text" style="margin:1rem 0 1rem 0;">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”
            </p>
            <h5 class="card-title" style="margin:1rem 0 1rem 0;">Robert Fox</h5>
           <p class="card-text" style="margin:1rem 0 1rem 0;">Founder at Brain.co</p>
          </div>
        </div></div>
          <div class="col-sm-4"><div class="card text-center" style="width: 18rem;">
          <div class="card-body">
          <div style="margin:1rem 0 1rem 0;">
          <img src="	https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg" alt="Image" class="img-fluid"  width="100px"
          height= "112px" style="border-radius:60px">
          </div>
            <p class="card-text" style="margin:1rem 0 1rem 0;">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”
            </p>
            <h5 class="card-title" style="margin:1rem 0 1rem 0;">Kristin Watson</h5>
           <p class="card-text" style="margin:1rem 0 1rem 0;">UX Designer at Google</p>
          </div>
        </div></div>
          </div>
          </div>
          </div>`,
    });

    editor.BlockManager.add("bootstrap-Hero", {
      label: "Hero",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-window" viewBox="0 0 16 16">
          <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
          <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z"/>
        </svg>`,
      content: `<div
      style="
        position: relative;
        background-image: url(https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png);
        background-size: cover;
        background-position: center;
        height: 66vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0 2rem 0;
      "
    >
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 20px;
        "
      >
        <div>
          <h1>
            Find the best office <br />
            accessories in one tap
          </h1>
        </div>
        <div data-gjs-type="bootstrap-button" style="margin-top: 1rem"></div>
      </div>
    </div>`,
    });
    editor.Components.addType("bootstrap-button", {
      model: {
        defaults: {
          tagName: "button",
          classes: ["btn", "btn-dark"],
          components: "Contact US",
          traits: [
            {
              type: "text",
              label: "Button Text",
              name: "text",
              changeProp: true,
            },
            {
              type: "select",
              label: "Button Style",
              name: "class",
              changeProp: true,
              options: [
                { id: "btn btn-primary", name: "Primary" },
                { id: "btn btn-secondary", name: "Secondary" },
                { id: "btn btn-success", name: "Success" },
                { id: "btn btn-warning", name: "Warning" },
                { id: "btn btn-danger", name: "Danger" },
                { id: "btn btn-info", name: "Info" },
                { id: "btn btn-light", name: "Light" },
                { id: "btn btn-dark", name: "Dark" },
              ],
            },
            {
              type: "text",
              label: "Button URL",
              name: "href",
              placeholder: "https://www.example.com",
              changeProp: true,
            },
          ],
          text: "Button",
        },
        init() {
          this.on("change:text", this.handleTextChange);
          this.on("change:class", this.handleClassChange);
          this.on("change:href", this.handleHrefChange);
        },
        handleTextChange() {
          const text = this.get("text");
          this.components(text);
        },
        handleClassChange() {
          const selectedClass = this.get("class");
          this.setClass(selectedClass);
        },
        handleHrefChange() {
          const href = this.get("href");
          if (href) {
            const buttonEl = this.getEl();
            if (buttonEl) {
              buttonEl.onclick = () => {
                window.open(href, "_blank");
              };
            }
          }
        },
      },
    });
    editor.BlockManager.add("bootstrap-Footer", {
      label: "Footer",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-window-desktop" viewBox="0 0 16 16">
              <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5.0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
              <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1zM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1zM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643z"/>
            </svg>`,
      content: `<div class="container-fluid">
              <div class="col-md-12" style="background-color:#3C486B; padding: 1rem;
              border: 1px solid rgba(228, 228, 231);">
                <div class="row">
                  <div class="col-md-4"  style="padding-top:10px;text-align:center;color:#fff;">© Copyright 2024. All Rights Reserved</div>
                  <div class="col-md-4"></div>
                  <div class="col-md-4">
                  <div class="col-md-12">
                  <div class="row">
                  <div class="col-md-3">   <a href="https://www.facebook.com/" target="_blank">
                  <i class="bi bi-facebook" style="font-size: 1.5rem;color:#fff;"></i>
                  </a> </div>
                  <div class="col-md-3">  <a href="https://x.com/" target="_blank">
                  <i class="bi bi-twitter-x" style="font-size: 1.5rem;color:#fff;"></i>
                  </a></div>
                  <div class="col-md-3">  <a href="https://www.instagram.com/" target="_blank">
                  <i class="bi bi-instagram" style="font-size: 1.5rem;color:#fff;"></i>
                  </a> </div>

                  <div class="col-md-3">  <a href="https://in.linkedin.com/" target="_blank">
                  <i class="bi bi-linkedin" style="font-size: 1.5rem;color:#fff;"></i>
                  </a> </div>


                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>`,
    });
    editor.BlockManager.add("bootstrap-clients-logo", {
      label: "Clients-Logo",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
      <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
    </svg>`,
      content: `<div class="container-fluid" style="background-color:rgb(37 99 235);color:#fff;padding:2rem 1rem;border-radius:1rem;">
      <div class="col-md-12 col-sm-12">
     <div class="row">
<div class="col-md-4 col-sm-4" style="margin-top:2rem;"><h1>Trusted by companies of all sizes</h1></div>
<div class="col-md-8 col-sm-8">
<img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/waverio.svg" alt="waverio" height="100px" width="160px" style="margin:1rem 8px;"/>
<img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/logoipsum.svg" alt="logoipsum" height="100px" width="160px" style="margin:1rem 8px;"/>
<img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/alterbone.svg" alt="alterbone" height="100px" width="160px" style="margin:1rem 8px;"/>
<img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/carbonia.svg" alt="carbonia" height="100px" width="160px"  style="margin:1rem 8px;" />
<img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/tinygone.svg" alt="tinygone" height="100px" width="160px" style="margin:0 8px;" />
<img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/preso.svg" alt="preso" height="100px" width="160px"  style="margin:0 8px;" />
<img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/ridoria.svg" alt="ridoria" height="100px" width="160px"  style="margin:0 8px;"/>
<img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/3/incanto.svg" alt="incanto" height="100px" width="160px"  style="margin:0 8px;"/>
</div>
     </div>
      </div>
      </div>`,
    });
    editor.BlockManager.add("bootstrap-faq", {
      label: "FAQ",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chevron-bar-contract" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M3.646 14.854a.5.5 0 0 0 .708 0L8 11.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708m0-13.708a.5.5 0 0 1 .708 0L8 4.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8"/>
    </svg>`,
      content: `<div class="container" style="height:22rem;background-color:#F5F5F5;">
      <div class="col-md-12 col-sm-12" style="padding:1rem;">
      <h4 style="text-align:center;">Got Questions ? We're here to <span style="color:#3b97e3;font-weight:bold;">help!</span></h4>
       </div>
       <div class="col-md-12 col-sm-12">
       <div class="row">
       <div class="col-md-6 col-sm-6">
       <!--1--> 
       <div class="accordion accordion-flush" id="accordionFlushExample" style="margin:1rem 0;">
       <div class="accordion-item">
         <h2 class="accordion-header" id="flush-headingOne">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style="color:#52525B;">
           How much money can you really save me ?
           </button>
         </h2>
         <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
           <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
         </div>
       </div>
       </div>
       <!--2--> 
       <div class="accordion accordion-flush" id="accordionFlushExample2"  style="margin:1rem 0;">
       <div class="accordion-item">
         <h2 class="accordion-header" id="flush-headingTwo">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style="color:#52525B;">
           Why should we work with you when we already have a Procurement department ?
           </button>
         </h2>
         <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample2">
           <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
         </div>
       </div>
       </div>

       <!--3--> 
       <div class="accordion accordion-flush" id="accordionFlushExample"  style="margin:1rem 0;">
       <div class="accordion-item">
         <h2 class="accordion-header" id="flush-headingOne">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne" style="color:#52525B;">
           How is Spendflo better than other solutions in the market ?
           </button>
         </h2>
         <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
           <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
         </div>
       </div>
       </div>
       </div>
       <div class="col-md-6 col-sm-6">
       <!--4--> 
       <div class="accordion accordion-flush" id="accordionFlushExample"  style="margin:1rem 0;">
       <div class="accordion-item">
         <h2 class="accordion-header" id="flush-headingOne">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseOne" style="color:#52525B;">
           What industries and businesses does Spendflo benefit the most ?
           </button>
         </h2>
         <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
           <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
         </div>
       </div>
       </div>
          <!--5--> 
          <div class="accordion accordion-flush" id="accordionFlushExample"  style="margin:1rem 0;">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseOne" style="color:#52525B;">
                How can we trust you with our strategic vendor relationships that we've build over time ?
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            </div>
                 <!--6--> 
       <div class="accordion accordion-flush" id="accordionFlushExample"  style="margin:1rem 0;">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseOne" style="color:#52525B;">
            Do you also double as a SaaS management platform ?
            </button>
          </h2>
          <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        </div>
       </div>
       </div>
       </div>
       </div>`,
    });
    const blockIds = [
      "column1",
      "column2",
      "column3",
      "column3-7",
      "text",
      "link",
    ];

    blockIds.forEach((blockId) => {
      editor.BlockManager.remove(blockId);
    });

    editor.Panels.addButton("options", {
      id: "custom-button",
      command: "save-page",
      label: `<button style="cursor: pointer">SAVE</button>`,
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
    /* eslint-disable */
  }, []);

  return (
    <div>
      <Logout />
      <div id="gjs"></div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
