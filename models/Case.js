const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Land = require('./Land');

// Create Schema
const CaseSchema = new Schema({
    case_num: {
        type: Number,
        required: true,
        min: 0,
        max: 99999
    },
    landPurchase: {
        purchaseAgreement: {
            type: String,
        },
        guideform: {
            type: String,
        },
        projectPF: {
            type: String,
        },
        environmentalReview: {
            type: String,
        },
    },
    newBuild: {
        request: {
            type: String,
        },
        bidResults: {
            type: String,
        },
        contract: {
            type: String,
        },
        name1: {
            type: String,
        },
        licensed1: {
            type: Boolean,
        },
        insured1: {
            type: Boolean
        },
        passedDebarment1: {
            type: Boolean
        },
        noticeOfCommencement1: {
            type: String
        },
        extensionRequest1: {
            type: String
        },
        lockBoxCode1: {
            type: String
        },
        passedInspection1: {
            type: Boolean
        },
        passedProgressInspection1: {
            type: Boolean
        },
        passedEngineerInspection1: {
            type: Boolean
        },
        stateOfMichiganInspection1: {
            type: Boolean
        },
        walkthroughSignedSpecs1: {
            type: String
        },
        certificateOfCompletion1: {
            type: String
        },
        initialInspectionSpecs1: {
            type: String
        },
        changeOrders1: {
            type: String
        },
        subcontractorCerts1: {
            type: String
        },
        townshipPermit1: {
            type: String
        },
        additionalInspections1: {
            type: String
        },
        inspectionPhotos1: {
            type: String
        },
        name2: {
            type: String,
        },
        licensed2: {
            type: Boolean,
        },
        insured2: {
            type: Boolean
        },
        passedDebarment2: {
            type: Boolean
        },
        noticeOfCommencement2: {
            type: String
        },
        extensionRequest2: {
            type: String
        },
        lockBoxCode2: {
            type: String
        },
        passedInspection2: {
            type: Boolean
        },
        passedProgressInspection2: {
            type: Boolean
        },
        passedEngineerInspection2: {
            type: Boolean
        },
        stateOfMichiganInspection2: {
            type: Boolean
        },
        walkthroughSignedSpecs2: {
            type: String
        },
        certificateOfCompletion2: {
            type: String
        },
        initialInspectionSpecs2: {
            type: String
        },
        changeOrders2: {
            type: String
        },
        subcontractorCerts2: {
            type: String
        },
        townshipPermit2: {
            type: String
        },
        additionalInspections2: {
            type: String
        },
        inspectionPhotos2: {
            type: String
        },
        name3: {
            type: String,
        },
        licensed3: {
            type: Boolean,
        },
        insured3: {
            type: Boolean
        },
        passedDebarment3: {
            type: Boolean
        },
        noticeOfCommencement3: {
            type: String
        },
        extensionRequest3: {
            type: String
        },
        lockBoxCode3: {
            type: String
        },
        passedInspection3: {
            type: Boolean
        },
        passedProgressInspection3: {
            type: Boolean
        },
        passedEngineerInspection3: {
            type: Boolean
        },
        stateOfMichiganInspection3: {
            type: Boolean
        },
        walkthroughSignedSpecs3: {
            type: String
        },
        certificateOfCompletion3: {
            type: String
        },
        initialInspectionSpecs3: {
            type: String
        },
        changeOrders3: {
            type: String
        },
        subcontractorCerts3: {
            type: String
        },
        townshipPermit3: {
            type: String
        },
        additionalInspections3: {
            type: String
        },
        inspectionPhotos3: {
            type: String
        }
    },
    homeSale: {
        application: {
            type: String,
        },
        familyForm: {
            type: String,
        },
        birthCertificates: {
            type: String,
        },
        environmentalReview: {
            type: String,
        },
        T4506Form: {
            type: String,
        },
        IRSResponse: {
            type: String,
        },
        IRSReturns: {
            type: String,
        },
        taxableIncome: {
            type: String,
        },
        payStubs: {
            type: String,
        },
        annualBenefits: {
            type: String,
        },
        oneCPD: {
            type: String,
        },
        homeConsortium: {
            type: String,
        },
        homeCounseling: {
            type: String,
        },
        appraisal: {
            type: String,
        },
        signedClosing: {
            type: String,
        },
        signedHHAPA: {
            type: String,
        },
        tilPromissory: {
            type: String,
        },
    },
    paymentRecords: {
        progressApplication1: {
            type: String,
        },
        progressInspection1: {
            type: String,
        },
        serviceVoucher1: {
            type: String,
        },
        invoice1: {
            type: String,
        },
        quickbook1: {
            type: String,
        },
        swornStatement1: {
            type: String,
        },
        conditionalWaivers1: {
            type: String,
        },
    },
    finalApplication: {
        progressApplication2: {
            type: String,
        },
        progressInspection2: {
            type: String,
        },
        serviceVoucher2: {
            type: String,
        },
        invoice2: {
            type: String,
        },
        quickbook2: {
            type: String,
        },
        swornStatement2: {
            type: String,
        },
        conditionalWaivers2: {
            type: String,
        },
        developerFee: {
            type: String,
        },
        projectPayment: {
            type: String,
        },
        swornStatements: {
            type: String,
        },
        debarmentChecks: {
            type: String,
        },
    },
    other: {
        contractorBreakdown: {
            type: String,
        },
        contractorActual: {
            type: String,
        },
        contractorAward: {
            type: String,
        },
        matchReport: {
            type: String,
        },
    }
    
});

module.exports = Case = mongoose.model('case', CaseSchema);