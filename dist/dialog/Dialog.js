import { withTheme } from '../config';
import DialogLoading from './DialogLoading';
import DialogTitle from './DialogTitle';
import DialogButton from './DialogButton';
import DialogActions from './DialogActions';
import { DialogBase } from './DialogBase';
const Dialog = Object.assign(DialogBase);
export { Dialog };
const ThemedDialog = Object.assign(withTheme(Dialog, 'Dialog'), {
    Loading: DialogLoading,
    Title: DialogTitle,
    Actions: DialogActions,
    Button: DialogButton,
});
export default ThemedDialog;
