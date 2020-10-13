import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { Link, Page } from "..";
import {
  StyledAnchor,
  StyledButton,
  StyledSpan,
  StyledFlexBox,
  StyledH3,
} from "../../Styles";
import { Themes, URLS } from "../../Utils";
import ReactQuill, { Quill } from "react-quill";
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
      contentHtml: "",
    };
    this.contentEditorRef = undefined;

    this.handleChange = this.handleChange.bind(this);
    this.setupServer();
  }

  componentDidMount() {
    this.getContentEditor();
  }

  componentDidUpdate() {
    this.getContentEditor();
  }

  /**
   * Retrieve the quill editor element from the React ref set in the render method
   */
  getContentEditor = () => {
    if (typeof this.contentEditorRef.getEditor !== "function") return;
    this.contentEditor = this.contentEditorRef.getEditor();
  };

  /**
   *
   * @param {string} contentHtml The editor content in HTML
   * @param {Quill.Delta} delta The new content that was added
   * @param {string} source Who the update comes from, the client itself ("user") or the server ("api")
   */
  handleChange = (contentHtml, delta, source) => {
    if (source === "api") return;

    this.setState({
      contentHtml: contentHtml,
    });
    this.socket.emit("updateDocs", this.contentEditor.getContents());
  };

  /**
   * Setup the real time server
   */
  setupServer = () => {
    this.socket = io.connect("http://localhost:5000");
    this.socket.on("updateDocs", (docsContent) => this.updateDocs(docsContent));
  };

  /**
   * Called when the server sends back the event "updateDocs"
   * @param {Quill.Delta} docsContent The updated docs content to now display
   */
  updateDocs = (docsContent) => {
    this.contentEditor.setContents(docsContent, "api");
  };

  /**
   * The quill editor modules
   */
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
  /**
   * The quill editor formats
   */
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
      <StyledFlexBox
        margin={"auto 25%"}
        mobileMargin={"auto 2rem"}
        padding={"2rem"}
      >
        <StyledH3
          theme={this.state.theme}
          padding={"0 0 2rem 0"}
          textAlign={"center"}
        >
          {"Space'Docs!"}
        </StyledH3>
        <ReactQuill
          ref={(el) => (this.contentEditorRef = el)}
          theme={"snow"}
          value={this.state.contentHtml}
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
        />
        <StyledAnchor as={Link} to={URLS.CHAT_PAGE}>
          <StyledButton
            margin={"3rem auto 0 auto"}
            width={"11rem"}
            mobileWidth={"15rem"}
            enabled={true}
          >
            <StyledSpan margin={"0 0.5rem 0 0"}>
              <i class="fas fa-arrow-alt-circle-right"></i>{" "}
            </StyledSpan>
            {"Space'Chat"}
          </StyledButton>
        </StyledAnchor>
      </StyledFlexBox>
    </Page>
  );
}

function mapStateToProps(state) {
  return { ...state, currentPath: URLS.COMMON_PAGE };
}

export default connect(mapStateToProps, null)(DocsPage);
