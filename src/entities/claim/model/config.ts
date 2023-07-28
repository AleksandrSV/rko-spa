import {useReferenceStore} from 'entities/reference'
import {router} from 'app/providers'
import type {Claim, ClaimReq, RealClaim} from 'entities/claim/model';
import {useModalStore} from 'widgets/modal';
import {computed} from 'vue'
import type {ReferenceData, References} from 'entities/reference';
import type {IMenuItem} from 'shared/ui/menu';
import {assign} from 'shared/api/claim-api';

//перегруженная штука получилась, разделить врят ли успею
export const useClaimConfig = (claim: RealClaim) => {

    const modalStore = useModalStore()
    const refStore = useReferenceStore()

    const take = () => {
        //ругается пока так как нету бэка
        assign(claim.id)
        router.push(`/client/${claim.client?.id}/${claim.id}`)
    }
    //это бы лучше сделать но потом
    const takeMenu = [
        {text: "Взять в работу", action: () => take()},
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)}
    ]
    const edMenu = [
        {text: "Редактировать", action: () => router.push(`/client/${claim.client?.id}/${claim.id}`)},
        {text: "Посмотреть", action: () => modalStore.openModal('info', claim)},
        {text: "Журнал состояний", action: () => modalStore.openModal('journal', claim)},
    ]

    const items = new Map<string, IMenuItem[]>([
        ['NEW', takeMenu],
        ['IN_PROGRESS', edMenu],
        ['PENDING', takeMenu],
        ['DONE', edMenu]
    ]);

    const menuItems = () => {
        return items.get(claim.status)
    }
    const deformateDate = (isoDate: string) => {
        const dateObject = new Date(isoDate.split(".")[0]);
        console.log(dateObject)
        return {formattedDate:{}, timeOnlyFormat: {}};
    }
    const formatDate = (isoDate: string) => {
        console.log(isoDate)
        const date = new Date(isoDate?.split(".")[0]);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear().toString().slice(2);

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        const formattedDate = `${day}.${month}.${year} в ${hours}.${minutes}`;
        const dateOnly = `${day}.${month}.${year}`;
        const timeOnly = `${hours}.${minutes}`;
        console.log(formattedDate,dateOnly,timeOnly)
        return {formattedDate, dateOnly, timeOnly};
    }
    const createdDate = computed(() => {
        return formatDate(claim.created_date).formattedDate;
    })
    const createdDateOnly = computed(() => {
        return formatDate(claim.created_date).dateOnly;
    })
    const createdTimeOnly = computed(() => {
        return formatDate(claim.created_date).timeOnly;
    })
    const createdDateFormat = computed(() => {
        return deformateDate(claim.created_date).formattedDate;
    })
    const createdDateOnlyFormat = computed(() => {
        return deformateDate(claim.created_date).formattedDate;
    })
    const createdTimeOnlyFormat = computed(() => {
        return deformateDate(claim.created_date).timeOnlyFormat;
    })
    const pauseTill = computed(() => {
        if (claim.pause_till)
            return formatDate(claim.pause_till).formattedDate;
    })
    const pauseTillFormat = computed(() => {
        if (claim.pause_till)
            return deformateDate(claim.pause_till).formattedDate;
    })
    const updDate = computed(() => {
        if (claim.updated_date)
            return formatDate(claim.updated_date).formattedDate;
    })

    const minsFromCreation = () => {
        const date = new Date(claim.created_date);
        const now = new Date();
        const timeDiff = now.getTime() - date.getTime();
        return Math.floor(timeDiff / 60000);
    }

    const getTextByCode = (code: string, targetArray: string) => {
        return refStore.refernces?.[targetArray as keyof References]!.find((item: ReferenceData) => item.code === code)?.text;
    }
    const channelLine = `${getTextByCode(claim.channel!, 'channels')}${claim.is_first_line ? ' 1 линия' : ''}`
    const initiator = getTextByCode(claim.initiator_type!, 'initiatorTypes')
    const status = getTextByCode(claim.status, 'statuses')
    const priority = getTextByCode(claim.priority!, 'priority')
    const type = getTextByCode(claim.claim_type!, 'claimTypes')
    const theme = getTextByCode(claim.claim_theme!, 'claimThemes')

    const inWorkFor = () => {
        //обновлять? да и вобще както неоч, потом поменяю
        const date = new Date(claim.updated_date);
        const now = new Date();
        const timeDiff = now.getTime() - date.getTime();
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} д.`;
        } else if (hours > 0) {
            return `${hours} ч.`;
        } else if (minutes > 0) {
            return `${minutes} мин.`;
        } else {
            return `${seconds} сек`;
        }
    }

    const isExpired = computed(() => {
        if (claim.pause_till) {
            const date = new Date(claim.pause_till);
            const now = new Date();
            return date < now
        }
        return false
    })

    return {
        createdDate, createdDateFormat, channelLine, initiator,
        status, priority, type, inWorkFor,
        theme, pauseTill, isExpired, menuItems,
        minsFromCreation, updDate, createdDateOnly, createdDateOnlyFormat,
        createdTimeOnly, createdTimeOnlyFormat
    }
}
