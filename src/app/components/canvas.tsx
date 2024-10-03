"use client";
import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import plugin from "grapesjs-blocks-basic";
import ReactDOMServer from "react-dom/server";
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import Hero from "../blocks/Hero";
import Testimonial from "../blocks/Testimonial";
import thePlugin from "grapesjs-plugin-export";
import { useApplicationContext } from "../context/applicationContext";

export default function canvasPage() {
  const { currentBlock } = useApplicationContext();
  let canvasBlock: string | URL | Request;

  switch (currentBlock) {
    case "Blog Template":
      canvasBlock = "/blog.html";
      break;
    case "Architect Template":
      canvasBlock = "/architect.html";
      break;
    default:
      canvasBlock = "";
  }

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      height: "700px",
      width: "100%",
      storageManager: false,
      plugins: ["gjs-preset-webpage", plugin, thePlugin],
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

    // editor.BlockManager.add("services", {
    //   label: "Services",
    //   category: "Basic",
    //   media: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-gear-wide" viewBox="0 0 16 16">
    //   <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
    // </svg>`,
    //   content: `<div class="container">
    //   <h1 style="text-align:center">Services</h1>
    //   <div class="col-sm-12">
    //   <div class="row">
    //   <div class="col-sm-4">
    //   <div class="card text-center" style="width: 18rem;">
    //   <div class="card-body">
    //   <div>
    //   <img src="" alt="Image" class="img-fluid"     width="274px"
    //   height= "274px">
    //   </div>
    //     <h5 class="card-title">Service 1</h5>
    //     <p class="card-text">when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal
    //     </p>
    //   </div>
    // </div>
    // </div>
    //   <div class="col-sm-4"><div class="card text-center" style="width: 18rem;">
    //   <div class="card-body">
    //   <div>
    //   <img src="" alt="Image" class="img-fluid">
    //   </div>
    //     <h5 class="card-title">Service 2</h5>
    //     <p class="card-text">when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal
    //     </p>
    //   </div>
    // </div></div>
    //   <div class="col-sm-4"><div class="card text-center" style="width: 18rem;">
    //   <div class="card-body">
    //   <div>
    //   <img src="" alt="Image" class="img-fluid">
    //   </div>
    //     <h5 class="card-title">Service 3</h5>
    //     <p class="card-text">when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal
    //     </p>
    //   </div>
    // </div></div>
    //   </div>
    //   </div>
    //   </div>`,
    // });
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
      content: `<div style="margin-top:25px">
          <div>
          <img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png" alt="hero" height="350px" width="100%" style="position:relative;object-fit:cover" />
          </div>
          <div style="position:absolute;top:15%;left:10%">
          <div class="container-fluid">
          <div class="col-md-12 col-sm-12">
          <div style="color:#fff;margin-bottom:40px;text-align:center;font-weight:bold;width:31rem;margin-left: 14rem;text-align: center"><h1>Find the best office accessories in one tap</h1></div>
          </div>
          <div class="col-md-12 col-sm-12">
          <div data-gjs-type="bootstrap-button" style="margin-left:350px"></div>
          </div>
          </div>
          </div>
          </div>`,
    });
    editor.BlockManager.add("bootstrap-Footer", {
      label: "Footer",
      category: "Basic",
      media: `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-window-desktop" viewBox="0 0 16 16">
              <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5.0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
              <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1zM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1zM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643z"/>
            </svg>`,
      content: `<div class="container">
              <div class="col-md-12" style="background-color:#F5F5F7;margin-top:2rem;">
                <div class="row">
                  <div class="col-md-4"  style="padding-top:10px;text-align:center;">© Copyright 2022. All Rights Reserved</div>
                  <div class="col-md-4"></div>
                  <div class="col-md-4">
                  <div class="col-md-12">
                  <div class="row">
                  <div class="col-md-4">      <a href="https://www.facebook.com/" target="_blank">
                  <i class="bi bi-facebook" style="font-size: 2rem;"></i>
                  </a> </div>
                  <div class="col-md-4">     <a href="https://www.facebook.com/" target="_blank">
                  <i class="bi bi-twitter-x"  style="font-size: 2rem;"></i>
                  </a></div>
                  <div class="col-md-4">  <a href="https://www.facebook.com/" target="_blank">
                  <i class="bi bi-instagram" style="font-size: 2rem;"></i>
                  </a> </div>
                  </div>
                  </div>
                  </div>
                </div>
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

    const blockIds = [
      "column1",
      "column2",
      "column3",
      "column3-7",
      "text",
      "link",
    ];

    fetch(canvasBlock)
      .then((response) => response.text())
      .then((htmlContent) => {
        editor.setComponents(htmlContent);
      })
      .catch((error) => console.error("Error", error));

    blockIds.forEach((blockId) => {
      editor.BlockManager.remove(blockId);
    });
  }, []);

  return <div id="gjs"></div>;
}
