import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { colours } from "../Constants";

const StyledProvider = styled(LiveProvider)`
  border-radius: 3px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: 20px;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled(LiveEditor)`
  background: ${colours.lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: 14px;
  height: 350px;
  overflow: scroll;
  ${column}
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column}
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: 8px;
  background: ${colours.red};
  color: ${colours.white};
`;

const LiveEdit = ({ noInline, code, scope }) => (
  <StyledProvider scope={scope} code={code} noInline={noInline}>
    <LiveWrapper>
      <StyledEditor />
      <StyledPreview />
    </LiveWrapper>

    <StyledError />
  </StyledProvider>
);

LiveEdit.propTypes = {
  noInline: PropTypes.bool,
  code: PropTypes.string,
  scope: PropTypes.object
};

LiveEdit.defaultProps = {
  noInline: false,
  code: "",
  scope: {}
};

export default LiveEdit;
