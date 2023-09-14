function Footer() {
  return (
    <div className="copyrightShadow">
      <div className="copyright">
        <span className="mb-2 copyrightText">
          TTK House &#169; {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}

export { Footer };
