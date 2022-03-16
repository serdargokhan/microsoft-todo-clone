import Image from "next/image";
// CSS
import classes from "styles/Layout/Options.module.scss";
// Images
import CompleteIcon from "public/Menu/Complete.svg";

interface Props {
    complete?: boolean;
    theme?: boolean;
}

function ListOptions({ complete, theme }: Props) {
    return (
        <div className={classes.listFlex}>
            {complete && (
                <div className={classes.childFlex}>
                    <Image src={CompleteIcon} width={24} height={24} />
                    <span className={classes.info}>Hide completed tasks</span>
                </div>
            )}
            {theme && (
                <div className={classes.childFlex}>
                    <span className={classes["mdl2-theme"]}></span>
                    <span className={classes.info}>Change theme</span>
                    <span className={classes["mdl2-chevronRight"]}></span>
                </div>
            )}
            <div className={classes.childFlex}>
                <span className={classes["mdl2-printer"]}></span>
                <span className={classes.info}>Print list</span>
            </div>
        </div>
    );
}

export default ListOptions;
