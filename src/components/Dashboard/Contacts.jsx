import { StyledContacts, StyledListItem, StyledServices } from '../../styes/DashboardStyles';
import { StyledSizingWrapper } from '../../styes/GlobalStyles';

export const Contacts = () => {
  return (
    <>
      <StyledContacts>
        <StyledSizingWrapper>
          <StyledServices>
            <h2>CONTACTS</h2>
            <ul>
              <StyledListItem>stalkakuma@gmail.com</StyledListItem>
            </ul>
          </StyledServices>
        </StyledSizingWrapper>
      </StyledContacts>
    </>
  );
};
