import React from 'react'

const UsefulBar = () => {
  return (
    <div>
      <div className="container">
        <div className="text-white font-lato font-normal justify-start items-center flex flex-col sm:flex-row bg-[var(--secondary)] p-10 gap-7 rounded-md">

            <div className='flex flex-row gap-4 items-center'>
                <div>
                    <svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="47.3743" height="50" rx="5" fill="#FAE0E1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.665 17.0001C17.135 17.0001 15.5 18.7331 15.5 21.4161V29.5841C15.5 32.2671 17.135 34.0001 19.665 34.0001H28.333C30.864 34.0001 32.5 32.2671 32.5 29.5841V21.4161C32.5 18.7331 30.864 17.0001 28.334 17.0001H19.665ZM28.333 35.5001H19.665C16.276 35.5001 14 33.1221 14 29.5841V21.4161C14 17.8781 16.276 15.5001 19.665 15.5001H28.334C31.723 15.5001 34 17.8781 34 21.4161V29.5841C34 33.1221 31.723 35.5001 28.333 35.5001Z" fill="#131126"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.8135 28.6231C22.6225 28.6231 22.4295 28.5501 22.2835 28.4031L19.9095 26.0301C19.6165 25.7371 19.6165 25.2631 19.9095 24.9701C20.2025 24.6771 20.6765 24.6771 20.9695 24.9701L22.8135 26.8121L27.0295 22.5971C27.3225 22.3041 27.7965 22.3041 28.0895 22.5971C28.3825 22.8901 28.3825 23.3641 28.0895 23.6571L23.3435 28.4031C23.1975 28.5501 23.0055 28.6231 22.8135 28.6231Z" fill="#131126"/>
                    </svg>

                </div>

                <div className="text-sm">
                Super useful and easy to with over 100+ customisations!
                </div>
            </div>

            <div className='flex flex-row gap-4 items-center'>
                <div>
                    <svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="47.3743" height="50" rx="5" fill="#F3DEB3"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 17.0001C19.313 17.0001 15.5 20.8131 15.5 25.5001C15.5 30.1871 19.313 34.0001 24 34.0001C28.687 34.0001 32.5 30.1871 32.5 25.5001C32.5 20.8131 28.687 17.0001 24 17.0001ZM24 35.5001C18.486 35.5001 14 31.0141 14 25.5001C14 19.9861 18.486 15.5001 24 15.5001C29.514 15.5001 34 19.9861 34 25.5001C34 31.0141 29.514 35.5001 24 35.5001Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M27.4312 29.1926C27.3002 29.1926 27.1682 29.1586 27.0472 29.0876L23.2772 26.8386C23.0512 26.7026 22.9112 26.4576 22.9112 26.1936V21.3456C22.9112 20.9316 23.2472 20.5956 23.6612 20.5956C24.0762 20.5956 24.4112 20.9316 24.4112 21.3456V25.7676L27.8162 27.7976C28.1712 28.0106 28.2882 28.4706 28.0762 28.8266C27.9352 29.0616 27.6862 29.1926 27.4312 29.1926Z" fill="black"/>
                    </svg>
                </div>

                <div className="text-sm">
                Super useful and easy to with over 100+ customisations!
                </div>
            </div>

            <div className='flex flex-row gap-4 items-center'>
                <div>
                <svg
  width="48"
  height="51"
  viewBox="0 0 48 51"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="0.374268"
    y="0.5"
    width="47.3743"
    height="50"
    rx="5"
    fill="#CBCFFA"
  />
  <mask
    id="mask0_1_200"
    style={{ maskType: "luminance" }}
    maskUnits="userSpaceOnUse"
    x="14"
    y="22"
    width="21"
    height="15"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3747 22.2942H34.3743V36.0382H14.3747V22.2942Z"
      fill="white"
    />
  </mask>
  <g mask="url(#mask0_1_200)">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.9397 36.0382H18.8097C16.3647 36.0382 14.3747 34.0492 14.3747 31.6032V26.7282C14.3747 24.2832 16.3647 22.2942 18.8097 22.2942H19.7427C20.1567 22.2942 20.4927 22.6302 20.4927 23.0442C20.4927 23.4582 20.1567 23.7942 19.7427 23.7942H18.8097C17.1907 23.7942 15.8747 25.1102 15.8747 26.7282V31.6032C15.8747 33.2222 17.1907 34.5382 18.8097 34.5382H29.9397C31.5577 34.5382 32.8747 33.2222 32.8747 31.6032V26.7192C32.8747 25.1062 31.5627 23.7942 29.9507 23.7942H29.0077C28.5937 23.7942 28.2577 23.4582 28.2577 23.0442C28.2577 22.6302 28.5937 22.2942 29.0077 22.2942H29.9507C32.3897 22.2942 34.3747 24.2792 34.3747 26.7192V31.6032C34.3747 34.0492 32.3847 36.0382 29.9397 36.0382Z"
      fill="black"
    />
  </g>
  <mask
    id="mask1_1_200"
    style={{ maskType: "luminance" }}
    maskUnits="userSpaceOnUse"
    x="23"
    y="15"
    width="3"
    height="15"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.6243 15.5002H25.1243V29.0411H23.6243V15.5002Z"
      fill="white"
    />
  </mask>
  <g mask="url(#mask1_1_200)">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.3743 29.0411C23.9603 29.0411 23.6243 28.7051 23.6243 28.2911V16.2501C23.6243 15.8361 23.9603 15.5001 24.3743 15.5001C24.7883 15.5001 25.1243 15.8361 25.1243 16.2501V28.2911C25.1243 28.7051 24.7883 29.0411 24.3743 29.0411Z"
      fill="black"
    />
  </g>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M21.4593 19.9289C21.2683 19.9289 21.0763 19.8559 20.9303 19.7099C20.6373 19.4179 20.6353 18.9439 20.9283 18.6499L23.8433 15.7219C24.1243 15.4389 24.6243 15.4389 24.9053 15.7219L27.8213 18.6499C28.1133 18.9439 28.1123 19.4179 27.8193 19.7099C27.5253 20.0019 27.0513 20.0019 26.7593 19.7079L24.3743 17.3139L21.9903 19.7079C21.8443 19.8559 21.6513 19.9289 21.4593 19.9289Z"
    fill="black"
  />
</svg>


                </div>

                <div className="text-sm">
                Super useful and easy to with over 100+ customisations!
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default UsefulBar
