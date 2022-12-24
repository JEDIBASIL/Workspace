import { Button, Container, PasswordInput, TextInput } from "@mantine/core";


const SignIn: React.FC = () => {
    return (
        <>
            <form>
            <h3>Create account</h3>
                <Container>
                    <TextInput mb={"15px"} label={"Email or Username"} placeholder={"Enter email address or username"} />
                    <PasswordInput mb={"15px"} label={"Username"} placeholder={"Enter password"} />
                    <Button fullWidth>Sign in</Button>
                </Container>
            </form>
        </>
    );
}

export default SignIn;