import { ParsedArgs } from 'minimist';

import { DebugSubCommand } from './DebugSubCommand';
import { Command, SubCommand } from '..';
import { HelpTopic } from '../../helpTopic';

export class DebugCommand implements Command<any> {

    public name: string = 'debug';
    public description: string = 'command used to debug';
    public helpTopic: HelpTopic;
    public subCommands: { [key: string]: SubCommand<any> } = {};

    constructor() {
        this.helpTopic = new HelpTopic(this, {
             synopsis: 'debug'
        });

        this.subCommands['test'] = new DebugSubCommand(this);
    }

    run(args: ParsedArgs): object {
        return args;
    }

}