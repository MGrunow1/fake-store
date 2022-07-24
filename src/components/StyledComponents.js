import styled from "styled-components";

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

export const SizedImage = styled.img`
width: 100%;
`;
