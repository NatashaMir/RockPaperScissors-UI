import Head from "next/head";
import {StatisticTable} from "@/app/components/RockPaperScissors/Statistic";
import Link from "@mui/material/Link";


export default function statistic() {
    return (
        <>
            <Head>
                <title>Rock-Paper-Scissors Game</title>
            </Head>
            <div>
                <StatisticTable />
                <Link href="/game" underline="none">
                    Show Game
                </Link>
            </div>
        </>
    );
}