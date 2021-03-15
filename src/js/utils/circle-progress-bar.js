// export const circleProgressBar = (value) => {
//   const circleHtmlString = `
//     <svg class="circle-progress-bar">
//         <path class="ring" fill="#00c790"/>
//         <circle cx="100" cy="100" r="82" fill="#0e2a36"/>
//         <circle cx="100" cy="100" r="73" fill="none" stroke="#00c790" stroke-width="7" opacity=".5"/>
//         <text x="100" y="100" text-anchor="middle" dominant-baseline="central" fill="#00c790" font-size="60" font-weight="bold" class="text">${value}</text>
//     </svg>
//     `;

//   return circleHtmlString;
// };

// export const onCircleProgressBar = (element) => {
//   const ring = element.querySelector('.ring');
//   const range = element.querySelector('.text').textContent * 100;
//   const toRadians = Math.PI / 180;
//   const r = 100;
//   // Update the wheel giving to it a value in degrees,
//   // getted from the percentage of the input value
//   // a.k.a. (value * 360) / 100
//   const degrees = range * 3.5999;
//   // Convert the degrees value to radians
//   const rad = degrees * toRadians;
//   // Determine X and cut to 2 decimals
//   const x = (Math.sin(rad) * r).toFixed(2);
//   // Determine Y and cut to 2 decimals
//   const y = -(Math.cos(rad) * r).toFixed(2);
//   // The another half ring. Same as (deg > 180) ? 1 : 0
//   const lenghty = Number(degrees > 180);
//   // Moveto + Arcto
//   const descriptions = [
//     'M',
//     0,
//     0,
//     'v',
//     -r,
//     'A',
//     r,
//     r,
//     1,
//     lenghty,
//     1,
//     x,
//     y,
//     'z',
//   ];
//   // Apply changes to the path
//   ring.setAttribute('d', descriptions.join(' '));
//   // Translate the center axis to a half of total size
//   ring.setAttribute('transform', 'translate(' + r + ', ' + r + ')');
// };
