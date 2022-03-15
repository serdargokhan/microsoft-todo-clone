// CSS
import classes from "styles/Layout/ListOptions.module.scss";

function ListOptions() {
    return (
        <div className={classes.listOptionMenu}>
            <p className={classes.title}>List options</p>
            <div className={classes.listFlex}>
                <span className={classes["mdl2-printer"]}></span>
                <span className={classes.info}>Print list</span>
            </div>
        </div>
    );
}

export default ListOptions;
