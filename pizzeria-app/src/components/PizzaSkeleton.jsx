import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="144" cy="127" r="114" /> 
    <rect x="39" y="269" rx="9" ry="9" width="210" height="24" /> 
    <rect x="14" y="319" rx="9" ry="9" width="267" height="78" /> 
    <rect x="12" y="422" rx="9" ry="9" width="75" height="33" /> 
    <rect x="192" y="419" rx="24" ry="24" width="89" height="44" />
  </ContentLoader>
)

export default MyLoader

