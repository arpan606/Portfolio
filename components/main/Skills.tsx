import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from "../../constants"
import SkillData from "../sub/SkillData"
import SkillText from "../sub/SkillText"
import StarsCanvas from "./StarBackground"

const Skills = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20" style={{ transform: "scale(0.9)" }}>
            <StarsCanvas color="red" />
            <StarsCanvas color="blue" />
            <SkillText />
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skill_data.map((skill, index) => (
                    <SkillData key={index} src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((skill, index) => (
                    <SkillData key={index} src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((skill, index) => (
                    <SkillData key={index} src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((skill, index) => (
                    <SkillData key={index} src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((skill, index) => (
                    <SkillData key={index} src={skill.Image} width={skill.width} height={skill.height} index={index} />
                ))}
            </div>
            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        src="/cards-video.webm"
                        className="h-auto w-full"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                    ></video>
                </div>
            </div>
        </section>

    )
}

export default Skills