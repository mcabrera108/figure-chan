import { Cloudinary } from "@cloudinary/url-gen";

export function getCloudinaryImage(imgName: string) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDNAME,
    },
  });
  const myImage = cld.image(imgName || "");
  return myImage;
}
