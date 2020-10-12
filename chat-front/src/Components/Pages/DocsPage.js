import React, { Component } from "react";
import { connect } from "react-redux";
import { Page } from "..";
import { StyledFlexBox, StyledH3 } from "../../Styles";
import { Themes, URLS } from "../../Utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class DocsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: Themes.LIGHT,
      params: {
        [Themes.LIGHT]: { backgroundColor: Themes.DARK },
        [Themes.DARK]: { backgroundColor: Themes.LIGHT },
      },
      content: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (newContent) => {
    this.setState({ content: newContent });
  };

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  render = () => (
    <Page backgroundColor={this.state.params[this.state.theme].backgroundColor}>
      <StyledFlexBox margin={"auto"} padding={"0 2rem"}>
        <StyledH3
          theme={this.state.theme}
          padding={"0 0 2rem 0"}
          textAlign={"center"}
        >
          {"Space'Chat Docs!"}
        </StyledH3>
        <ReactQuill
          theme={"snow"}
          value={this.state.content}
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
        />
      </StyledFlexBox>
    </Page>
  );
}

function mapStateToProps(state) {
  return { ...state, currentPath: URLS.COMMON_PAGE };
}

export default connect(mapStateToProps, null)(DocsPage);
