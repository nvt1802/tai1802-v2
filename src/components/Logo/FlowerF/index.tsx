import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"

interface FlowerFIconProps {
  width?: string
  height?: string
  color?: string
  duration?: number
}

const FlowerFIcon: FC<FlowerFIconProps> = ({
  width = "40px",
  height = "40px",
  duration = 5,
}) => {
  const useStyles = makeStyles({
    animate: {
      animation: `$spin ${duration}s infinite linear`,
    },
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  })

  const classes = useStyles()

  return (
    <svg
      className={classes.animate}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 457.378 457.378"
      version="1.1"
      viewBox="0 0 457.378 457.378"
      xmlSpace="preserve"
    >
      <g>
        <path
          fill="#027226"
          d="M256.143 456.257c-110.281 0-200-89.72-200-200s89.719-200 200-200 200 89.72 200 200-89.72 200-200 200zm0-384c-101.458 0-184 82.542-184 184s82.542 184 184 184 184-82.542 184-184-82.543-184-184-184z"
        ></path>
        <path
          fill="#e82f3e"
          d="M297.81 423.154a20.6 20.6 0 00-19.138-3.428 20.594 20.594 0 00-8.091 4.916 29.573 29.573 0 01-5.437 4.227 29.554 29.554 0 012.34-6.477 20.6 20.6 0 002.175-9.214 20.6 20.6 0 00-9.174-17.142l-6.716-4.477-6.715 4.477a20.6 20.6 0 00-9.174 17.142 20.6 20.6 0 002.175 9.214 29.606 29.606 0 012.34 6.477 29.573 29.573 0 01-5.437-4.227 20.594 20.594 0 00-8.091-4.916 20.6 20.6 0 00-19.138 3.428l-6.333 5 2.183 7.77a20.6 20.6 0 0013.468 14.023 20.6 20.6 0 009.435.778 29.6 29.6 0 016.883-.224 29.536 29.536 0 01-5.7 3.865 20.6 20.6 0 00-7.176 6.176 20.6 20.6 0 00-2.654 19.261l2.8 7.569 8.064.325a20.606 20.606 0 0021.155-17.208 29.505 29.505 0 011.913-6.616 29.508 29.508 0 011.914 6.616 20.6 20.6 0 0021.157 17.211l8.064-.325 2.8-7.569a20.6 20.6 0 00-2.653-19.261 20.591 20.591 0 00-7.175-6.176 29.574 29.574 0 01-5.7-3.865 29.615 29.615 0 016.884.224 20.6 20.6 0 009.435-.778 20.6 20.6 0 0013.468-14.023l2.183-7.77z"
        ></path>
        <circle cx="253.769" cy="447.019" r="16" fill="#ea9d2d"></circle>
        <path
          fill="#e82f3e"
          d="M299.557 54.694a20.6 20.6 0 00-19.138-3.428 20.594 20.594 0 00-8.091 4.916 29.616 29.616 0 01-5.437 4.227 29.554 29.554 0 012.34-6.477 20.6 20.6 0 002.175-9.214 20.605 20.605 0 00-9.174-17.143l-6.716-4.475-6.716 4.475a20.6 20.6 0 00-9.174 17.143 20.6 20.6 0 002.175 9.214 29.606 29.606 0 012.34 6.477 29.616 29.616 0 01-5.437-4.227 20.594 20.594 0 00-8.091-4.916 20.6 20.6 0 00-19.138 3.428l-6.333 5 2.183 7.77a20.6 20.6 0 0013.469 14.026 20.6 20.6 0 009.435.778 29.606 29.606 0 016.883-.224 29.536 29.536 0 01-5.7 3.865 20.61 20.61 0 00-7.176 6.175 20.6 20.6 0 00-2.653 19.261l2.8 7.57 8.064.325a20.6 20.6 0 0021.153-17.209 29.536 29.536 0 011.913-6.616 29.538 29.538 0 011.914 6.616 20.6 20.6 0 0021.155 17.209l8.064-.325 2.8-7.57a20.6 20.6 0 00-2.646-19.261 20.61 20.61 0 00-7.176-6.175 29.536 29.536 0 01-5.7-3.865 29.608 29.608 0 016.883.224 20.6 20.6 0 009.435-.778 20.6 20.6 0 0013.468-14.023l2.183-7.77z"
        ></path>
        <circle cx="255.516" cy="78.559" r="16" fill="#ea9d2d"></circle>
        <path
          fill="#537cd8"
          d="M203.029 400.557a20.6 20.6 0 00-17.959-7.451 20.609 20.609 0 00-8.956 3.068 29.545 29.545 0 01-6.217 2.964 29.578 29.578 0 013.675-5.825 20.616 20.616 0 004.1-8.534 20.6 20.6 0 00-5.287-18.71l-5.6-5.812-7.519 2.933a20.6 20.6 0 00-12.635 14.778 20.6 20.6 0 00.15 9.466 29.568 29.568 0 01.9 6.828 29.545 29.545 0 01-4.4-5.294 20.612 20.612 0 00-6.849-6.536 20.6 20.6 0 00-19.432-.753l-7.258 3.53.467 8.057a20.6 20.6 0 0010.15 16.583 20.6 20.6 0 009.048 2.783 29.6 29.6 0 016.772 1.256 29.5 29.5 0 01-6.4 2.553 20.6 20.6 0 00-8.333 4.5 20.6 20.6 0 00-6.72 18.244l1.114 7.994 7.808 2.046A20.6 20.6 0 00148 436.945a29.594 29.594 0 013.288-6.052 29.539 29.539 0 01.451 6.873 20.6 20.6 0 0016.975 21.342l7.947 1.411 4.358-6.793a20.6 20.6 0 001.536-19.382 20.6 20.6 0 00-5.685-7.57 29.569 29.569 0 01-4.74-5 29.543 29.543 0 016.675 1.694 20.614 20.614 0 009.383 1.262 20.6 20.6 0 0016.161-10.81l3.8-7.122z"
        ></path>
        <circle cx="154.898" cy="414.428" r="16" fill="#ea9d2d"></circle>
        <path
          fill="#e82f3e"
          d="M101.575 223.533a20.6 20.6 0 00-19.393 1.38 20.588 20.588 0 00-6.635 6.753 29.593 29.593 0 01-4.232 5.434 29.592 29.592 0 01.677-6.854 20.61 20.61 0 00-.155-9.466 20.6 20.6 0 00-13.106-14.362l-7.61-2.69-5.409 5.99a20.6 20.6 0 00-4.681 18.871 20.6 20.6 0 004.373 8.4 29.568 29.568 0 013.86 5.7 29.554 29.554 0 01-6.309-2.762 20.6 20.6 0 00-9.051-2.777 20.6 20.6 0 00-17.704 8.027l-4.909 6.406 4.025 7a20.605 20.605 0 0016.5 10.283 20.609 20.609 0 009.337-1.564 29.554 29.554 0 016.617-1.909 29.5 29.5 0 01-4.576 5.147 20.615 20.615 0 00-5.438 7.749 20.6 20.6 0 002.161 19.322l4.576 6.649 7.9-1.667a20.606 20.606 0 0016.277-21.879 29.552 29.552 0 01.229-6.883 29.565 29.565 0 013.481 5.943 20.6 20.6 0 0024.734 11.482l7.737-2.3.856-8.025a20.6 20.6 0 00-7.306-18.019 20.607 20.607 0 00-8.472-4.223 29.517 29.517 0 01-6.476-2.345 29.549 29.549 0 016.728-1.474 20.62 20.62 0 008.954-3.073 20.6 20.6 0 009.609-16.9l.207-8.069z"
        ></path>
        <circle cx="64.75" cy="257.488" r="16" fill="#ea9d2d"></circle>
        <path
          fill="#0292c9"
          d="M140.524 147.54a20.6 20.6 0 00-15.888-11.208 20.59 20.59 0 00-9.411 1.028 29.584 29.584 0 01-6.715 1.528 29.593 29.593 0 014.862-4.877 20.61 20.61 0 005.872-7.427 20.6 20.6 0 00-1.055-19.414l-4.188-6.9-7.979 1.213a20.6 20.6 0 00-15.569 11.647 20.616 20.616 0 00-1.931 9.268 29.511 29.511 0 01-.622 6.859 29.6 29.6 0 01-3.136-6.132 20.6 20.6 0 00-5.248-7.878 20.6 20.6 0 00-18.79-5L52.87 112.1l-1.312 7.964a20.6 20.6 0 006.265 18.406 20.61 20.61 0 008.218 4.7 29.512 29.512 0 016.331 2.711 29.581 29.581 0 01-6.8 1.087 20.608 20.608 0 00-9.115 2.558A20.6 20.6 0 0045.9 165.853l-.667 8.043 7.169 3.709a20.6 20.6 0 0026.45-6.634 29.514 29.514 0 014.535-5.184 29.592 29.592 0 01-1.067 6.8 20.6 20.6 0 0011.88 24.55l7.444 3.12 5.742-5.672a20.6 20.6 0 005.751-18.573 20.6 20.6 0 00-3.886-8.633 29.584 29.584 0 01-3.528-5.914 29.588 29.588 0 016.141 3.117 20.593 20.593 0 008.877 3.289 20.6 20.6 0 0018.138-7l5.267-6.115z"
        ></path>
        <circle cx="90.521" cy="150.515" r="16" fill="#ea9d2d"></circle>
        <path
          fill="#029532"
          d="M176.543 131.681l13.324-32.608a45.62 45.62 0 001.525-30.158 45.619 45.619 0 00-17.649-24.5l-28.888-20.158-13.323 32.608a45.6 45.6 0 00-1.525 30.157 45.612 45.612 0 0017.648 24.5z"
        ></path>
        <path
          fill="#029532"
          d="M171.57 86.56l9.82 33.26-4.85 11.86-10.5-7.33-7.73-26.21-30.14-22.47a45.461 45.461 0 012.95-17.76l19.64 14.65-10.75-36.44 4.85-11.86 10.5 7.33 9.81 33.26 10.4-19.1a45.663 45.663 0 0111.28 12.76z"
        ></path>
        <path
          fill="#027e2a"
          d="M171.57 86.56l9.82 33.26-4.85 11.86-10.5-7.33-7.73-26.21-30.14-22.47a45.461 45.461 0 012.95-17.76l19.64 14.65-10.75-36.44 4.85-11.86 10.5 7.33 9.81 33.26 10.4-19.1a45.663 45.663 0 0111.28 12.76z"
        ></path>
        <path
          fill="#029532"
          d="M125.466 315.564l-35.086-3.127a45.607 45.607 0 00-29.269 7.426A45.617 45.617 0 0042.9 343.946L32.143 377.49l35.086 3.127a45.622 45.622 0 0029.271-7.426 45.6 45.6 0 0018.215-24.082z"
        ></path>
        <path
          fill="#029532"
          d="M125.47 315.56l-3.91 12.2-22.78 15.11-12.5 35.18a2.443 2.443 0 01-.1.24 45.463 45.463 0 01-17.65 2.43l8.03-23.1-31.66 21.01-12.76-1.14 3.91-12.2 28.9-19.17-21.31-4.29a45.651 45.651 0 016.31-11.48c.8-1.06 1.64-2.08 2.54-3.06l31.32 6.32 28.9-19.18z"
        ></path>
        <path
          fill="#027226"
          d="M125.47 315.56l-3.91 12.2-22.78 15.11-12.5 35.18a2.443 2.443 0 01-.1.24 45.463 45.463 0 01-17.65 2.43l8.03-23.1-31.66 21.01-12.76-1.14 3.91-12.2 28.9-19.17-21.31-4.29a45.651 45.651 0 016.31-11.48c.8-1.06 1.64-2.08 2.54-3.06l31.32 6.32 28.9-19.18z"
        ></path>
        <path
          fill="#ffb3b3"
          d="M309.256 400.557a20.6 20.6 0 0117.959-7.451 20.613 20.613 0 018.957 3.068 29.56 29.56 0 006.216 2.964 29.528 29.528 0 00-3.674-5.825 20.616 20.616 0 01-4.1-8.534 20.6 20.6 0 015.287-18.71l5.6-5.812 7.519 2.933a20.6 20.6 0 0112.635 14.778 20.6 20.6 0 01-.15 9.466 29.623 29.623 0 00-.9 6.828 29.551 29.551 0 004.4-5.294 20.612 20.612 0 016.849-6.536 20.6 20.6 0 0119.429-.753l7.258 3.53-.467 8.057a20.6 20.6 0 01-10.15 16.583 20.6 20.6 0 01-9.049 2.783 29.6 29.6 0 00-6.771 1.256 29.5 29.5 0 006.4 2.553 20.589 20.589 0 018.332 4.5 20.6 20.6 0 016.721 18.244l-1.114 7.994-7.808 2.046a20.6 20.6 0 01-24.35-12.275 29.542 29.542 0 00-3.285-6.057 29.539 29.539 0 00-.451 6.873 20.6 20.6 0 01-16.975 21.342l-7.947 1.411-4.358-6.793a20.6 20.6 0 01-1.536-19.382 20.6 20.6 0 015.685-7.57 29.569 29.569 0 004.74-5 29.565 29.565 0 00-6.676 1.694 20.608 20.608 0 01-9.382 1.262 20.6 20.6 0 01-16.161-10.81l-3.8-7.122z"
        ></path>
        <circle cx="357.388" cy="414.428" r="16" fill="#ea9d2d"></circle>
        <path
          fill="#2fbbdf"
          d="M410.71 223.533a20.6 20.6 0 0119.394 1.38 20.588 20.588 0 016.635 6.753 29.631 29.631 0 004.231 5.434 29.537 29.537 0 00-.676-6.854 20.6 20.6 0 01.155-9.466 20.6 20.6 0 0113.106-14.362l7.609-2.69 5.41 5.99a20.6 20.6 0 014.68 18.871 20.608 20.608 0 01-4.372 8.4 29.568 29.568 0 00-3.86 5.7 29.554 29.554 0 006.309-2.762 20.6 20.6 0 019.05-2.777 20.605 20.605 0 0117.71 8.026l4.909 6.407-4.025 7a20.607 20.607 0 01-16.5 10.283 20.609 20.609 0 01-9.337-1.564 29.562 29.562 0 00-6.618-1.909 29.546 29.546 0 004.577 5.147 20.6 20.6 0 015.437 7.749 20.6 20.6 0 01-2.16 19.322l-4.576 6.649-7.9-1.667a20.6 20.6 0 01-16.277-21.879 29.552 29.552 0 00-.229-6.883 29.518 29.518 0 00-3.481 5.943 20.6 20.6 0 01-24.734 11.482l-7.738-2.3-.855-8.025a20.605 20.605 0 017.305-18.019 20.617 20.617 0 018.473-4.223 29.517 29.517 0 006.476-2.345 29.573 29.573 0 00-6.728-1.474 20.616 20.616 0 01-8.954-3.073 20.607 20.607 0 01-9.61-16.9l-.206-8.069z"
        ></path>
        <circle cx="447.536" cy="257.488" r="16" fill="#ea9d2d"></circle>
        <path
          fill="#537cd8"
          d="M371.762 147.54a20.6 20.6 0 0115.888-11.208 20.59 20.59 0 019.411 1.028 29.584 29.584 0 006.715 1.528 29.56 29.56 0 00-4.863-4.877 20.607 20.607 0 01-5.871-7.427 20.605 20.605 0 011.058-19.414l4.189-6.9 7.979 1.213a20.6 20.6 0 0115.569 11.646 20.6 20.6 0 011.93 9.268 29.62 29.62 0 00.622 6.859 29.608 29.608 0 003.137-6.132 20.6 20.6 0 015.248-7.878 20.6 20.6 0 0118.79-5l7.856 1.851 1.312 7.964a20.6 20.6 0 01-6.265 18.406 20.617 20.617 0 01-8.218 4.7 29.512 29.512 0 00-6.331 2.711 29.582 29.582 0 006.8 1.087 20.6 20.6 0 019.115 2.558 20.6 20.6 0 0110.558 16.326l.667 8.043-7.169 3.709a20.6 20.6 0 01-26.45-6.634 29.555 29.555 0 00-4.535-5.184 29.592 29.592 0 001.067 6.8 20.6 20.6 0 01-11.879 24.546l-7.444 3.12-5.743-5.672a20.6 20.6 0 01-5.75-18.573 20.62 20.62 0 013.886-8.633 29.541 29.541 0 003.529-5.914 29.588 29.588 0 00-6.141 3.117 20.593 20.593 0 01-8.878 3.289 20.6 20.6 0 01-18.138-7l-5.267-6.115z"
        ></path>
        <circle cx="421.765" cy="150.515" r="16" fill="#d18d28"></circle>
        <path
          fill="#029532"
          d="M335.743 131.681l-13.324-32.608a45.62 45.62 0 01-1.525-30.158 45.619 45.619 0 0117.649-24.5l28.888-20.156 13.323 32.608a45.6 45.6 0 011.525 30.157 45.612 45.612 0 01-17.648 24.5z"
        ></path>
        <path
          fill="#029532"
          d="M384.11 75.68l-30.13 22.46-7.73 26.21-10.51 7.33-4.84-11.85 9.81-33.27-15.27-28.06a45.446 45.446 0 0111.28-12.74l10.39 19.09 9.82-33.27 10.5-7.32 4.84 11.85-10.75 36.45 19.65-14.64a45.636 45.636 0 012.94 17.76z"
        ></path>
        <path
          fill="#027e2a"
          d="M384.11 75.68l-30.13 22.46-7.73 26.21-10.51 7.33-4.84-11.85 9.81-33.27-15.27-28.06a45.446 45.446 0 0111.28-12.74l10.39 19.09 9.82-33.27 10.5-7.32 4.84 11.85-10.75 36.45 19.65-14.64a45.636 45.636 0 012.94 17.76z"
        ></path>
        <path
          fill="#029532"
          d="M386.82 315.564l35.086-3.127a45.608 45.608 0 0129.269 7.426 45.61 45.61 0 0118.215 24.083l10.753 33.544-35.086 3.127a45.62 45.62 0 01-29.269-7.426 45.611 45.611 0 01-18.216-24.082z"
        ></path>
        <path
          fill="#029532"
          d="M467.38 378.63l-31.66-21.01 7.89 23.11a45.472 45.472 0 01-17.5-2.44 2.443 2.443 0 01-.1-.24l-12.51-35.18-22.77-15.11-3.91-12.2 12.75-1.13 28.91 19.18 31.43-6.19c.85.94 1.66 1.92 2.42 2.93a45.8 45.8 0 016.3 11.43l-21.3 4.34 28.9 19.17 3.91 12.2z"
        ></path>
        <path
          fill="#027226"
          d="M467.38 378.63l-31.66-21.01 7.89 23.11a45.472 45.472 0 01-17.5-2.44 2.443 2.443 0 01-.1-.24l-12.51-35.18-22.77-15.11-3.91-12.2 12.75-1.13 28.91 19.18 31.43-6.19c.85.94 1.66 1.92 2.42 2.93a45.8 45.8 0 016.3 11.43l-21.3 4.34 28.9 19.17 3.91 12.2z"
        ></path>
      </g>
    </svg>
  )
}

export default FlowerFIcon