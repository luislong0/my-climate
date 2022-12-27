import BounceLoader from "react-spinners/BounceLoader";
import { Button } from "./styles";
import { theme } from "../../styles"

interface LoadingButtonProps {
  loading: boolean;
}

export function LoadingButton(props: LoadingButtonProps) {
  return (
    <Button disabled={props.loading}>
      <BounceLoader
        color={'#e1e1e6'}
        loading={props.loading}
        // cssOverride={override}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Button>
  )
}