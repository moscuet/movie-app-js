
export const favIcon = (wishChoice) => {
  console.log(wishChoice)
  let choice = wishChoice?'active-wish':''
    const icon = `
    <i class="far fa-fill fa-heart wish-icon ${choice} "></i>`;
    return icon;
  };