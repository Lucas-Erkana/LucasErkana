const PageHeader = ({ title, description }) => (
  <>
    <p className="pageDescription">{description}</p>
    <h3 className="pageTitle pageTitleMobile">{title}</h3>
  </>
);

export default PageHeader;
