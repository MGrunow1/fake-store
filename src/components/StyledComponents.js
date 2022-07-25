import styled from "styled-components";

export const LargeImage = styled.img`
width: 100%;
@media (min-width: 700px) {
    width: 45vw;
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

export const SizedImage = styled.img`
width: 100%;
`;

export const SpacedText = styled.div`
margin-bottom: .5rem;
`;

export const SubmitButton = styled.button`
padding: 5px;
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

export const Title = styled.div`
font-size: 2rem;
margin-bottom: 1.3rem;
`;
