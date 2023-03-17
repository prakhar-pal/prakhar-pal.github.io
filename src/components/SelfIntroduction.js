import clsx from "clsx";
import style from "./SelfIntroduction.module.scss";

const SelfIntroduction = ({ onClickDownArrow }) => {
    return (
        <div className="h-screen w-full flex items-center justify-center relative">
            <div className="p-4 text-center">
                <h1 className="text-9xl">Prakhar Pal</h1>
                <div className="mt-8 text-lg">Software Engineer | Web/Frontend | Open Source Enthusiast </div>
                <div className={"flex justify-center mt-6 items-center "+ style.brand_icons}>
                    <i className="fa fa-github "/>
                    <i className="fa fa-linkedin mr-8 text-xl bg-gray-700 h-8 w-8 rounded-full"/>
                    <i className="fa fa-instagram mr-8 text-xl bg-gray-700 h-8 w-8 rounded-full"/>
                </div>
                <div className="h-10 w-10 flex justify-center left-1/2 absolute bottom-8">
                    <i
                        onClick={onClickDownArrow}
                        className={clsx("fa fa-chevron-down h-full w-full text-black bg-yellow-300 rounded-full flex items-center justify-center cursor-pointer", style.bobble)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SelfIntroduction;
