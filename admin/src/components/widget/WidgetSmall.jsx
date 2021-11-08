import { Visibility } from "@material-ui/icons";
import styled from "styled-components";
import { newUser } from "../../data";

const Container = styled.div`
	flex: 1;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`;
const Title = styled.span`
    font-size: 22px;
    font-weight: 600;
`;
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
const ListItem =styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`;
const SmUser = styled.div`
    display: flex;
    flex-direction: column;
`
const SmUsername = styled.span`
    font-weight: 600;
`;
const SmUserTitle = styled.span`
    font-weight: 300;
`;
const SmButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    border-color: #eeeef7;
    color: #555;
    cursor: pointer;
`;


export default function WidgetSmall() {

    

	return (<Container>
        <Title> New join Members</Title>
        <List>
            {newUser.map( (user, key) =>(
                <ListItem key={key}>
                    <Image src={user.img}/>
                    <SmUser>
                        <SmUsername> {user.name} </SmUsername>
                        <SmUserTitle> {user.title} </SmUserTitle>
                    </SmUser>
                        <SmButton> 
                            <Visibility style={ {"fontSize" : "16px", "marginRight" : "5px"}} /> Display 
                        </SmButton>
                </ListItem>
            ))}
        </List>
    </Container>);
}
