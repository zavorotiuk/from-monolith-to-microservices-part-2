// import { IFindOptions } from 'sequelize-typescript';
// import { IIncludeOptions } from 'sequelize-typescript/lib/interfaces/IIncludeOptions';
// import { getUserId } from 'mineq-service-nodejs-utils';

// import Settings from '../models/settings.model';



class SettingsResponceModel {
    value: string;
    lastUpdatedBy: string;
    lastUpdate: Date;

    constructor({ Updated, UpdatedBy, Value}) {
        this.lastUpdate = Updated;
        this.lastUpdatedBy = UpdatedBy;
        this.value = Value;
    }
}

// /**
//  * @param requestParams
//  * @returns {IFindOptions<Setting>}
//  */
// function getfindParams({ settingsName }): IFindOptions<Settings> {
//     const findParams: IFindOptions<Settings> = {
//         where: {
//             Name: settingsName
//         }
//     };
//     return findParams;
// }

/**
 * Get settings item by settingsKey
 * @param ctx
 * @returns {Promise<void>}
 */
// export async function getSettingsItem(ctx): Promise<void> {
//     try {
//         const result = await Settings.findOne(getfindParams(ctx.params));

//         if (!result ) {
//             ctx.throw(400, `Settings with name ${ctx.params.settingsName} does not exist`);
//         }

//         ctx.body = new SettingsResponceModel(result);
//     } catch (err) {
//         ctx.app.emit('error', err, ctx);
//     }
// }

/**
 * Update or insert settings item
 * @param ctx
 * @returns {Promise<void>}
 */
// export async function upsertSettingItem(ctx): Promise<void> {
//     try {
//         const userId = await getUserId(ctx, process.env.SECURITY_SERVICE);
//         if (!userId) {
//             const err = new Error('Provided Authorization token should be user token');
//             ctx.app.emit('error', err, ctx);
//         }
//         const body = {
//             Name: ctx.params.settingsName,
//             Value: ctx.request.body.value,
//             Updated: new Date(),
//             UpdatedBy: userId
//         };
//         await Settings.upsert(body, getfindParams(ctx.params));
//         const savedSettings = await Settings.findOne(getfindParams(ctx.params));
//         ctx.body = new SettingsResponceModel(savedSettings);
//     } catch (err) {
//         ctx.app.emit('error', err, ctx);
//     }
// }

export default {
    // getSettingsItem,
    // upsertSettingItem
};
