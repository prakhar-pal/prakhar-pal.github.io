import * as React from "react";
import clsx from "clsx";
import style from "./SelfIntroduction.module.scss";

const BrandIcon = ({ className }: { className: string }) => <i className={clsx(className, "mr-8 text-xl bg-gray-700 h-8 w-8 rounded-full hover:bg-black transition-all duration-500")} />;

type ISelfIntroductionProps = {
    onClickDownArrow: () => void;
}
const SelfIntroduction = ({ onClickDownArrow }: ISelfIntroductionProps) => {
    return (
        <div className="h-screen w-full flex items-center justify-center relative select-none bg-gradeint-1">
            <div className="p-4 text-center">
                <div>
                    <h1 className={"text-9xl "+style.intro}>Prakhar Pal</h1>
                    <div className="mt-8 text-lg">Software Engineer | Web/Frontend | Open Source Enthusiast </div>
                </div>
                <div className={"flex justify-center mt-6 items-center " + style.brand_icons}>
                    <a href="https://github.com/prakhar-pal" target="_blank">
                        <BrandIcon className="fa fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/prakharpal/" target="_blank">
                        <BrandIcon className="fa fa-linkedin" />
                    </a>
                    <a href="https://leetcode.com/prakhar-pal/" target="_blank">
                        <span title="Not that active on leetcode.">
                            <BrandIcon className="fa fa-code" />
                        </span>
                    </a>
                </div>
                <div className="h-10 w-10 flex justify-center left-1/2 absolute bottom-8">
                    <i
                        onClick={onClickDownArrow}
                        className={clsx("bounce fa fa-chevron-down h-full w-full text-black bg-yellow-300 rounded-full flex items-center justify-center cursor-pointer")}
                    />
                </div>
            </div>
        </div>
    );
}

export default SelfIntroduction;
