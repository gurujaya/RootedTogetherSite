import * as React from "react"

const LinkedInIcon = ({className, ...rest}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} className={`w-full h-auto ${className}`} {...rest}>
    <title>{"Linkedin"}</title>
    <path
      fill="#007BB5"
      fillRule="evenodd"
      d="M20.972 33.553H25v-6.42c0-1.694.32-3.334 2.42-3.334 2.07 0 2.096 1.936 2.096 3.441v6.313h4.034v-7.119c0-3.496-.755-6.183-4.84-6.183-1.963 0-3.279 1.076-3.817 2.096h-.055v-1.774h-3.867v12.98ZM16.423 14.12a2.339 2.339 0 1 0 0 4.68 2.34 2.34 0 0 0 0-4.68Zm-2.02 19.433h4.038v-12.98h-4.038v12.98ZM9.766 40A1.766 1.766 0 0 1 8 38.234V9.766C8 8.791 8.79 8 9.766 8h28.468C39.209 8 40 8.79 40 9.766v28.468c0 .975-.79 1.766-1.766 1.766H9.766Z"
    />
  </svg>
)
export default LinkedInIcon
