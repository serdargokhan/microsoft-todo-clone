import Image from "next/image";
import Link from "next/link";
// CSS
import classes from "styles/Menu.module.scss";
// Components
import MenuLayout from "./MenuLayout";
// Images
import InfiniteIcon from "public/Menu/Infinite.svg";
import CompleteIcon from "public/Menu/Complete.svg";

function Menu() {
    return (
        <MenuLayout>
            <div className={classes.container}>
                <span className={classes["mdl2-navbar"]}></span>
                <div className={classes.flex}>
                    <Link href="/tasks/myday">
                        <div>
                            <span className={classes["mdl2-brightness"]}></span>
                            <p>My Day</p>
                        </div>
                    </Link>
                    <Link href="/tasks/important">
                        <div>
                            <span className={classes["mdl2-favorite"]}></span>
                            <p>Important</p>
                        </div>
                    </Link>
                    <Link href="/tasks/planned">
                        <div>
                            <span className={classes["mdl2-calendar"]}></span>
                            <p>Planned</p>
                        </div>
                    </Link>
                    <Link href="/tasks/all">
                        <div>
                            <Image src={InfiniteIcon}></Image>
                            <p>All</p>
                        </div>
                    </Link>
                    <Link href="/tasks/completed">
                        <div>
                            <Image src={CompleteIcon}></Image>
                            <p>Completed</p>
                        </div>
                    </Link>
                    <Link href="/tasks/assigned-to-me">
                        <div>
                            <span className={classes["mdl2-contact"]}></span>
                            <p>Assigned to me</p>
                        </div>
                    </Link>
                    <Link href="/tasks/inbox">
                        <div>
                            <span className={classes["mdl2-home"]}></span>
                            <p>Tasks</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Dynamic list adding will come here */}

            <div className={classes.footer}>
                <span className={classes["mdl2-mail"]}></span>
                <span className={classes["mdl2-calendar-bottom"]}></span>
                <span className={classes["mdl2-people"]}></span>
                <span className={classes["mdl2-attach"]}></span>
                <span className={classes["mdl2-todo"]}></span>
            </div>
        </MenuLayout>
    );
}

export default Menu;
