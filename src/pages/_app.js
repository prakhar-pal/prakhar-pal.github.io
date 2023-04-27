import Head from "next/head";
import "../../globals.scss";

const App = ({ Component, ...props }) => {
   return (
    <div className="max-w-7xl w-4/5 mx-auto py-4">
        <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Prakhar Pal</title>
        </Head>
        <Component {...props}/>
    </div>
    )
}

export default App;
