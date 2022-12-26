import bannerImg from "../../assets/svgs/Duplicate-cuate.svg"
import { Link as A } from "react-router-dom"
const Home: React.FC = () => {
    return (
        <>
            <div className="home_banner">

                <div className="text">
                    <h1>A Workspace for </h1>
                    <h1>Everyone</h1>
                  <div className="btn_container">
                  <A to={"/create-account"}><button >Create account</button></A>
                    <A to={"/sign-in"}><button >Sign in</button></A>
                  </div>
                </div>
                <img src={bannerImg} alt="" />
            </div>
        </>
    );
};

export default Home;
