import { Button, Container, PasswordInput, TextInput } from "@mantine/core";


const CreateAccount: React.FC = () => {
    return (
        <>
            <form>
                <h3>Create account</h3>
                <Container>
                    <TextInput mb={"15px"} label={"Email"} placeholder={"Enter email address"} />
                    <TextInput mb={"15px"} label={"Username"} placeholder={"Enter username"} />
                    <PasswordInput mb={"15px"} label={"Username"} placeholder={"Enter password"} />
                    <Button fullWidth>Create account</Button>
                </Container>
            </form>
        </>
    );
}

export default CreateAccount;