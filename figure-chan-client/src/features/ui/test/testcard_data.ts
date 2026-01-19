import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDNAME,
  },
});
export const myImage = cld.image("godzilla_nhi07c").toURL();
export const testImgOne = cld.image("azfigurefalslander_cqiisu").toURL();
export const killakill = cld.image("Mako-Ryuko-Christmas-2015_cz7ada").toURL();
export const nendo = cld
  .image("1000-Anime-Figurines-Transform-Tottori-Town-003-scaled_ievlnl")
  .toURL();
export const madoka = cld.image("2c7g9prh1ph61_mws7qy").toURL();
