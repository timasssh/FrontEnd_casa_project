import style from "./styles/LoaderComponent.module.css"

const LoaderComponent = () => {
    return <div className={style.loader}>
        <p>Carregando</p>
        <span className={style.loader_dot}></span>
        <span className={style.loader_dot}></span>
        <span className={style.loader_dot}></span>
    </div>
}

export default LoaderComponent
