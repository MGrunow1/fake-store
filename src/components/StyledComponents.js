import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


// global styled components

export const CenteredList = styled.div`
display: flex;
justify-content: center;
`;

export const CenteredGroup = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 3px;
`;

export const CenteredTitle = styled.div`
text-align: center;
margin-bottom: 20px;
font-size: 2rem;
@media (min-width: 400px) {
  font-size: 3rem;
  margin-bottom: 5px;
}
@media (min-width: 700px) {
  font-size: 4rem;
  margin-bottom: 0;
}
`;

export const GridItem = styled.div`
width: 90vw;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 30px;
@media (min-width: 500px) {
    margin-left: 20px;
    margin-right: 20px;
    width: 300px;
};
`;

export const MediumText = styled.div`
font-size: 1rem;
`;

export const PrimaryButton = styled.button`
padding: 5px;
margin: 5px;
font-size: 1.5rem;
border-radius: .3rem;
${(props) => props.dark
  ? `border: 3px solid white;
    background-color: black;
    color: white;`
  : `border: 3px solid black;
    background-color: white;
    color: black;`
}
&:active {
  border-width: 4px;
  padding: 4px;
  ${(props) => props.dark
  ? `background-color: #3c4c77;`
  : `background-color: #cdd6f0;`
    }
  }
`;

export const QuantityInput = styled.input`
width: 60px;
font-size: 1.2rem;
${(props) => props.dark
  ? `border: 1px solid white;
    background-color: black;
    color: white;`
  : `border: 1px solid black;
    background-color: white;
    color: black;`
}
`;

export const SecondaryButton = styled.button`
padding: 5px;
margin: 5px;
font-size: 1.2rem;
border-radius: .3rem;
${(props) => props.dark
  ? `border: 2px solid #ebebeb;
    background-color: black;
    color: #ebebeb;`
  : `border: 2px solid slategray;
    background-color: white;
    color: black;`
}
&:active {
  border-width: 3px;
  padding: 4px;
  ${(props) => props.dark
  ? `background-color: #3c4c77;`
  : `background-color: #cdd6f0;`
    }
  }
`;

export const SpacedText = styled.div`
margin-bottom: .5rem;
`;

export const Title = styled.div`
font-size: 2rem;
margin-bottom: 1.3rem;
`;




// cart view and checkout

export const Checkbox = styled.input`
${(props) => props.dark
  ? `accent-color: #3c4c77;`
  : `accent-color: #cdd6f0;`
}
`;

export const DropDownContainer = styled.div`
margin-left: 10px;
margin-right: 10px;
margin-bottom: 14px;
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 700px) {
    margin-bottom: 3px;
}
`;

export const FormInput = styled.input`
margin-left: 10px;
${(props) => props.dark
  ? `border: 1px solid white;
    background-color: black;
    color: white;`
  : `border: 1px solid black;
    background-color: white;
    color: black;`
}
${(props) => (props.disabled && props.dark)
  ? `background-color: #444;
    border-color: #ccc;`
  : ``
}
${(props) => (props.disabled && !props.dark)
  ? `background-color: #ebebeb;
    border-color: #444`
  : ``
}
`;

export const ListItem = styled.div`
width: 90vw;
margin-bottom: 10px;
${(props) => props.dark
  ? `border-bottom: 2px solid white;`
  : `border-bottom: 2px solid black;`
}
@media (min-width: 700px) {
    width: max-content;
    margin-bottom: 15px;
}
`;

export const MainForm = styled.form`
margin-top: 20px;
padding: 10px;
width: 90vw;
display: flex;
flex-direction: column;
${(props) => props.dark
  ? `border: 2px solid white;`
  : `border: 2px solid black;`
}
@media (min-width: 700px) {
    width: 600px;
}
`;

export const SelectDropDown = styled.select`
background-color: white;
color: black;
border-width: 2px;
border-radius: 0%;
${(props) => props.dark
  ? `border-color: #3c4c77;`
  : ``
}
`;

export const TrashIcon = styled(FontAwesomeIcon)`
color: #757575;
`;




// header and footer

export const CartWidgetContainer = styled.div`
display: flex;
align-items: center;
margin: 0px 20px;
${(props) => props.dark
  ? `color: white;`
  : `color: black;`
}
`;

export const Circle = styled.div`
border-radius: 50%;
padding: 3px 9px;
${(props) => props.dark
  ? `background-color: #cdd6f0;
    color: black;`
  : `background-color: #3c4c77;
    color: white;`
}
`;

export const FooterContainer = styled.footer`
text-align: center;
min-height: 50px;
${(props) => props.dark
  ? `background-color: #3c4c77;
    color: white;`
  : `background-color: #cdd6f0;
    color: black;`
}
`;

export const HamburgerButton = styled.button`
height: 40px;
width: 40px;
color: white;
font-size: 22px;
${(props) => props.dark
  ? `border: 2px solid white;
    background-color: black;`
  : `border: 1px solid black;
    background-color: #3c4c77;`
}
@media (min-width: 450px) {
    display: none;
}
`;

export const HamburgerDropdownContainer = styled.div`
position: absolute;
top: 50px;
width: 100%;
text-align: left;
${(props) => props.dark
  ? `background-color: black;`
  : `background-color: white;`
}
${(props) => props.isOpen
  ? `display: flex;
    flex-direction: column;`
  : `display: none;`
}
@media (min-width: 450px) {
    display: none;
}
`;

export const HeaderContainer = styled.header`
display: flex;
justify-content: flex-end;
${(props) => props.dark
  ? `background-color: #3c4c77;
    color: white;`
  : `background-color: #cdd6f0;
    color: black;`
}
@media (max-width: 450px) {
    justify-content: space-between;
}
`;

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: max-content;
min-height: 100vh;
${(props) => props.dark
  ? `background-color: black;
    color: white;`
  : `background-color: white;
    color: black;`
}
`;

export const NavContainer = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 450px) {
    display: none;
}
`;

export const NavLinkText = styled.div`
margin: 10px;
${(props) => props.dark
  ? `color: white;`
  : `color: black;`
}
${(props) => props.lessMargin
  ? `margin-right: 5px;`
  : ``
}
`;

export const SwitchContainer = styled.div`
align-self: center;
margin-right: 30px;
`;

export const SwitchIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-size: 16px;
`;




// products

export const ButtonTag = styled.div`
margin: 3px 0;
padding: 7px;
font-size: 1rem;
width: max-content;
border-radius: .3rem 0 0 .3rem;
border-bottom-width: 1px;
border-left-width: 1px;
border-right-width: 0;
border-top-width: 1px;
border-style: solid;
${(props) => props.dark
  ? `border-color: #ebebeb;
    background-color: black;
    color: #ebebeb;`
  : `border-color: #1c1c1c;
    background-color: white;
    color: black;`
}
`;

export const InputLabel = styled.label`
font-size: 1.2rem;
margin-right: 10px;
`;

export const LargeImage = styled.img`
width: 100%;
@media (min-width: 700px) {
    width: 45vw;
}
`;

export const LeftAlign = styled.div`
margin-bottom: .5rem;
text-align: left;
`;


export const ProductGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;


export const ProductText = styled.div`
width: 90vw;
@media (min-width: 700px) {
    width: 45vw;
}
`;

export const RadioButton = styled.input`
${(props) => props.dark
  ? `accent-color: #cdd6f0;`
  : `accent-color: #3c4c77;`
}
`;

export const RadioOption = styled.div`
margin: 0px 10px 20px 10px;
`

export const SizedImage = styled.img`
width: 100%;
`;

export const UndoButton = styled.button`
padding: 7px;
margin: 3px 0;
font-size: 1rem;
border-radius: 0 .3rem .3rem 0;
${(props) => props.dark
  ? `border: 1px solid white;
    background-color: black;
    color: white;`
  : `border: 1px solid black;
    background-color: white;
    color: black;`
}
&:active {
  border-width: 3px;
  padding: 4px;
  ${(props) => props.dark
  ? `background-color: #3c4c77;`
  : `background-color: #cdd6f0;`
    }
  }
`;
