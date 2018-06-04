const FacebookIcon = (props) => (
  <svg
    className="footer-icon"
    width={props.width}
    height={props.height}
    style={{enableBackground:'new 0 0 67 67'}}
    viewBox="0 0 67 67"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <style jsx>{`
      .footer-icon {
        fill: #777777; 
      }
      
      .footer-icon:hover {
        fill: #ede9e5;
        cursor: pointer; 
      }
    `}
    </style>

    <path 
      d="M29.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z"
      style={{fillRule:'evenodd', clipRule:'evenodd'}}
    />
  </svg>
)

FacebookIcon.defaultProps = {
  width: '100px',
  height: '100px'
}

export default FacebookIcon
