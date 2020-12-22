import { TelevisionRemote } from "./Invoker/TelevisionRemote";
import { TurnTvOn } from "./Commands/TurnTvOn";
import { DeviceButton } from "./Invoker/DeviceButton";
import { TurnTvOff } from "./Commands/TurnTvOff";
import { TvVolUp } from "./Commands/TvVolUp";
import { Radio } from "./Recievers/Radio";
import { TurnAllOff } from "./Commands/TurnAllOff";

const newDevice = TelevisionRemote.getDevice();

const onCommand: TurnTvOn = new TurnTvOn(newDevice);
const onPressed: DeviceButton = new DeviceButton(onCommand);
onPressed.press();

const offCommand: TurnTvOff = new TurnTvOff(newDevice);
const offPressed: DeviceButton = new DeviceButton(offCommand);
offPressed.press();

const volUpCommand: TvVolUp = new TvVolUp(newDevice);
const volupPress: DeviceButton = new DeviceButton(volUpCommand);
volupPress.press();
volupPress.press();
volupPress.press();


const radio: Radio = new Radio();
const turnAllOffCommand = new TurnAllOff([newDevice, radio]);
const turnOffAllBtn: DeviceButton = new DeviceButton(turnAllOffCommand);

turnOffAllBtn.press();

