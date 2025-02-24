import { StageContent } from "./_content/StageContent";
import { ToolBox } from "./_content/Toolbox";

export default function CanvasEditor() {

    return(
        <main className="w-3/4 flex justify-center overflow-auto max-h-screen">
            <ToolBox/>
            <StageContent/>
        </main>
    )
}