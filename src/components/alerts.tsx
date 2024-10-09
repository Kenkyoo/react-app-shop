import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export function SimpleAlert() {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Añadido al carrito. Puedes verlo en la pestaña Cart
      </Alert>
    );
  }

export function WarningAlert() {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="warning">
        El producto ha sido eliminado del carrito
      </Alert>
    );
  }