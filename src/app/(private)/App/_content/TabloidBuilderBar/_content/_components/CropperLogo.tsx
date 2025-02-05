import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Dispatch, RefObject, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

export default function CropperLogo({ image,
    ref,
    setLogoClubCroppedImage,
    setLogoClubImageWithoutBackground
}: {
    image: string,
    ref: RefObject<ReactCropperElement | null>,
    setLogoClubCroppedImage: Dispatch<SetStateAction<Base64URLString | null>>,
    setLogoClubImageWithoutBackground : Dispatch<SetStateAction<string | null>>,

}) {

    const handleCrop = () =>{
        if(ref.current){
            const cropper = ref.current.cropper;
            const logoClubImageCropped = cropper.getCroppedCanvas()

            const targetWidth = 50;
            const aspectRatio = logoClubImageCropped.width / logoClubImageCropped.height;
            const targetHeight = targetWidth / aspectRatio;

            const logoClubImageCroppedResized = document.createElement("canvas")
            logoClubImageCroppedResized.width = targetWidth;
            logoClubImageCroppedResized.height = targetHeight;
            
            const contextForLogoClubImageCroppedResized =  logoClubImageCroppedResized.getContext("2d")
            contextForLogoClubImageCroppedResized?.drawImage(logoClubImageCropped, 0, 0, targetWidth, targetHeight);

            const LogoClubImageResized = logoClubImageCroppedResized.toDataURL("image/png")
            setLogoClubCroppedImage(LogoClubImageResized)
            setLogoClubImageWithoutBackground(null)

        }
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white rounded-lg p-6 w-full">
                <div className=" w-full flex items-center justify-center">
                    <Cropper
                        src={image}
                        ref={ref}
                        style={{ height: 400, width: "100%" }}
                        aspectRatio={50 / 40}
                        guides={false}
                        cropBoxResizable={true}
                        zoomable={true}
                        dragMode="move"
                    />
                </div>
                <div className="w-full flex items-center justify-center mt-5 ">
                    <Button onClick={handleCrop} className="w-1/2">
                        Recortar
                    </Button>
                </div>
            </div>
        </div>
    )
}