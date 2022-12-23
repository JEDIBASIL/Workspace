import bannerImg from "../../assets/svgs/Duplicate-cuate.svg"
import { Button, Container } from "@mantine/core"
import { Link as A } from "react-router-dom"
const Home: React.FC = () => {
    return (
        <>
            <div className="home_banner">
                
                <img src={bannerImg} alt="" />
                <div>
                    <Container size={300}>
                        <A to={"/create-account"}><Button size={"md"} fullWidth>Create account</Button></A>
                    </Container>
                    <Container mt={"10px"} size={300}>
                        <A to={"/sign-in"}><Button size={"md"} variant={"white"} fullWidth>Sign in</Button></A>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Home;
