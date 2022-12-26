import { Container, PasswordInput, TextInput } from "@mantine/core";


const SignIn: React.FC = () => {
    return (
        <>
            <form>
            <h3>Sign in</h3>
                <Container>
                    <TextInput mb={"15px"} label={"Email or Username"} placeholder={"Enter email address or username"} />
                    <PasswordInput mb={"15px"} label={"Username"} placeholder={"Enter password"} />
                    <button className="form_btn">Create account</button>
                </Container>
            </form>
        </>
    );
}

export default SignIn;