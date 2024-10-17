import styled from 'styled-components';

export const CreateContainer = styled.section`
  background-color: var(--card);
  margin-top: 1rem;
  padding: 1rem 0rem;
  border-radius: 10pt;
  font-size: large;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CreateForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  gap: 2rem;
`;

export const CreateInputWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 0.3rem;
`;

export const CreateResponseToast = styled.div`
  position: absolute;
  font-size: xx-large;
  align-self: center;
  top: 0;
  bottom: 0;
  background-color: var(--lighterBackground);
  padding: 1rem 2rem;
  border-radius: 10pt;
  border: var(--backgroundGray) 5px solid;
`;

export const CreateWrapperButton = styled(CreateInputWrapper)`
  background-color: var(--lighterBackground);
  padding: 0.5rem;
  border-radius: 10pt;
`;
