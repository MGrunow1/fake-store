import styled from "styled-components";

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
  ? `border-color: ghostwhite;
    background-color: slategray;
    color: white;`
  : `border-color: slategray;
    background-color: ghostwhite;
    color: black;`
}
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

export const NavContainer = styled.div`
display: flex;
${(props) => props.vertical
  ? `flex-direction: column;`
  : `flex-direction: row;`
}
`;

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
${(props) => props.dark
  ? `background-color: black;
    color: white;`
  : `background-color: white;
    color: black;`
}
`;

export const PrimaryButton = styled.button`
padding: 5px;
margin: 5px;
font-size: 1.5rem;
border-radius: .3rem;
${(props) => props.dark
  ? `border: 2px solid white;
    background-color: black;
    color: white;`
  : `border: 2px solid black;
    background-color: white;
    color: black;`
}
`;

export const ProductGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;

export const ProductGridItem = styled.div`
width: 90vw;
display: flex;
flex-direction: column;
margin-bottom: 30px;
@media (min-width: 500px) {
    margin-left: 20px;
    margin-right: 20px;
    width: 300px;
};
`;

export const ProductText = styled.div`
width: 90vw;
@media (min-width: 700px) {
    width: 45vw;
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
  ? `border: 2px solid ghostwhite;
    background-color: black;
    color: white;`
  : `border: 2px solid slategray;
    background-color: white;
    color: black;`
}
`;

export const SizedImage = styled.img`
width: 100%;
`;

export const SpacedText = styled.div`
margin-bottom: .5rem;
`;

export const Title = styled.div`
font-size: 2rem;
margin-bottom: 1.3rem;
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
`;
