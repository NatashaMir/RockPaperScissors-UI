import Head from "next/head";
import {GameComponent} from "@/app/components/RockPaperScissors/Game";
import Link from "@mui/material/Link";


export default function game() {
    return (
        <>
            <Head>
                <title>Rock-Paper-Scissors Game</title>
            </Head>
            <div>
                <GameComponent />
                <Link href="/statistic" underline="none">
                    Show statistic
                </Link>
            </div>
        </>
    );
}