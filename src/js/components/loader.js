import spinner from '../../assets/img/loader.svg';

export const loader = () => {
  const loaderHTMLString = `
        <div class="loader__container">
            <img class="loader" src="${spinner}" />
        </div>
    `;
  return loaderHTMLString;
};
