import { Button, Container, PasswordInput, TextInput } from "@mantine/core";


const CreateAccount: React.FC = () => {
    return (
        <>
            <form>
                <h3>Sign up</h3>
                <Container>
                    <TextInput mb={"15px"} label={"Email"} placeholder={"Enter email address"} />
                    <TextInput mb={"15px"} label={"Username"} placeholder={"Enter username"} />
                    <PasswordInput mb={"15px"} label={"Password"} placeholder={"Enter password"} />
                    <button className="form_btn">Create account</button>
                </Container>
            </form>
        </>
    );
}

export default CreateAccount;