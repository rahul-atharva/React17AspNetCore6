import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListprops) {
    if (!props.list) {
        if (props.loadingUI) {
            return props.loadingUI;
        }
        return <Loading />
    }
    else if (props.list.length === 0) {
        if (props.emptyUI) {
            return props.emptyUI;
        }
        return <>There are no elements to display!!!</>
    }
    else {
        return props.children;
    }
}

interface genericListprops {
    list: any;
    loadingUI?: ReactElement;
    emptyUI?: ReactElement;
    children: ReactElement;
}