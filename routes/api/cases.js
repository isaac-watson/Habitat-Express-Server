const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

// Case Model
const Case = require('../../models/Case');

// @route   GET api/cases
// @desc    Get Case by case num
// @access  Public
router.get('/cases/:case_num', (req, res) => {
    Case.find( {case_num: req.params.case_num} )
        .then(cases => res.json(cases))
        .catch(err => res.status(404).json( {success: false} )); //id not found
});

// @route   POST api/cases
// @desc    Create a new case entry in the database
// @access  Public
router.post('/', 
upload.fields([{
    name: 'purchaseAgreement', maxCount: 50
  }, {
    name: 'guideform', maxCount: 50
  }, {
    name: 'projectPF', maxCount: 50
  },
  {
    name: 'environmentalReview', maxCount: 50
  },
  {
    name: 'request', maxCount: 50
  },
  {
    name: 'bidResults', maxCount: 50
  },
  {
    name: 'contract', maxCount: 50
  },
  {
    name: 'noticeofCommencement1', maxCount: 50
  },
  {
    name: 'extensionRequest1', maxCount: 50
  },
  {
    name: 'walkthroughSignedSpecs1', maxCount: 50
  },
  {
    name: 'certificateOfCompletion1', maxCount: 50
  },
  {
    name: 'initialInspectionSpecs1', maxCount: 50
  },
  {
    name: 'changeOrders1', maxCount: 50
  },
  {
    name: 'subcontractorCerts1', maxCount: 50
  },
  {
    name: 'townshipPermit1', maxCount: 50
  },
  {
    name: 'additionalInspections1', maxCount: 50
  },
  {
    name: 'inspectionPhotos1', maxCount: 50
  },
  {
    name: 'noticeofCommencement2', maxCount: 50
  },
  {
    name: 'extensionRequest2', maxCount: 50
  },
  {
    name: 'walkthroughSignedSpecs2', maxCount: 50
  },
  {
    name: 'certificateOfCompletion2', maxCount: 50
  },
  {
    name: 'initialInspectionSpecs2', maxCount: 50
  },
  {
    name: 'changeOrders2', maxCount: 50
  },
  {
    name: 'subcontractorCerts2', maxCount: 50
  },
  {
    name: 'townshipPermit2', maxCount: 50
  },
  {
    name: 'additionalInspections2', maxCount: 50
  },
  {
    name: 'inspectionPhotos2', maxCount: 50
  },
  {
    name: 'noticeofCommencement3', maxCount: 50
  },
  {
    name: 'extensionRequest3', maxCount: 50
  },
  {
    name: 'walkthroughSignedSpecs3', maxCount: 50
  },
  {
    name: 'certificateOfCompletion3', maxCount: 50
  },
  {
    name: 'initialInspectionSpecs3', maxCount: 50
  },
  {
    name: 'changeOrders3', maxCount: 50
  },
  {
    name: 'subcontractorCerts3', maxCount: 50
  },
  {
    name: 'townshipPermit3', maxCount: 50
  },
  {
    name: 'additionalInspections3', maxCount: 50
  },
  {
    name: 'inspectionPhotos3', maxCount: 50
  },
  {
    name: 'application', maxCount: 50
  },
  {
    name: 'familyForm', maxCount: 50
  },
  {
    name: 'birthCertificates', maxCount: 50
  },
  {
    name: 'environmentalReview', maxCount: 50
  },
  {
    name: 'T4506Form', maxCount: 50
  },
  {
    name: 'IRSResponse', maxCount: 50
  },
  {
    name: 'IRSReturns', maxCount: 50
  },
  {
    name: 'taxableIncome', maxCount: 50
  },
  {
    name: 'payStubs', maxCount: 50
  },
  {
    name: 'annualBenefits', maxCount: 50
  },
  {
    name: 'oneCPD', maxCount: 50
  },
  {
    name: 'homeConsortium', maxCount: 50
  },
  {
    name: 'homeCounseling', maxCount: 50
  },
  {
    name: 'appraisal', maxCount: 50
  },
  {
    name: 'signedClosing', maxCount: 50
  },
  {
    name: 'signedHHAPA', maxCount: 50
  },
  {
    name: 'tilPromissory', maxCount: 50
  },
  {
    name: 'progressApplication1', maxCount: 50
  },
  {
    name: 'progressInspection1', maxCount: 50
  },
  {
    name: 'serviceVoucher1', maxCount: 50
  },
  {
    name: 'invoice1', maxCount: 50
  },
  {
    name: 'quickbook1', maxCount: 50
  },
  {
    name: 'swornStatement1', maxCount: 50
  },
  {
    name: 'conditionalWaivers1', maxCount: 50
  },
  {
    name: 'progressApplication2', maxCount: 50
  },
  {
    name: 'progressInspection2', maxCount: 50
  },
  {
    name: 'serviceVoucher2', maxCount: 50
  },
  {
    name: 'invoice2', maxCount: 50
  },
  {
    name: 'quickbook2', maxCount: 50
  },
  {
    name: 'swornStatement2', maxCount: 50
  },
  {
    name: 'conditionalWaivers2', maxCount: 50
  },
  {
    name: 'developerFee', maxCount: 50
  },
  {
    name: 'projectPayment', maxCount: 50
  },
  {
    name: 'swornStatements', maxCount: 50
  },
  {
    name: 'debarmentChecks', maxCount: 50
  },
  {
    name: 'contractorBreakdown', maxCount: 50
  },
  {
    name: 'contractorActual', maxCount: 50
  },
  {
    name: 'contractorAward', maxCount: 50
  },
  {
    name: 'matchReport', maxCount: 50
  },
  
]), function(req, res, next){
        console.log(req.files);
        const newCase = new Case({
            case_num: req.body.case_num,
            landPurchase: {
                purchaseAgreement: req.files.purchaseAgreement,
                guideform: req.files.guideform,
                projectPF: req.files.projectPF,
                environmentalReview: req.files.environmentalReview,
            },
            newBuild: {
                request: req.files.request,
                bidResults: req.files.bidResults,
                contract: req.files.contract,
                name1: req.body.name1,
                licensed1: req.body.licensed1,
                insured1: req.body.insured1,
                passedDebarment1: req.body.passedDebarment1,
                noticeofCommencement1: req.files.noticeofCommencement1,
                extensionRequest1: req.files.extensionRequest1,
                lockBoxCode1: req.body.lockBoxCode1,
                passedInspection1: req.body.passedInspection1,
                passedProgressInspection1: req.body.passedProgressInspection1,
                passedEngineerInspection1: req.body.passedEngineerInspection1,
                stateOfMichiganInspection1: req.body.stateOfMichiganInspection1,
                walkthroughSignedSpecs1: req.files.walkthroughSignedSpecs1,
                certificateOfCompletion1: req.files.certificateOfCompletion1,
                initialInspectionSpecs1: req.files.initialInspectionSpecs1,
                changeOrders1: req.files.changeOrders1,
                subcontractorCerts1: req.files.subcontractorCerts1,
                townshipPermit1: req.files.townshipPermit1,
                additionalInspections1: req.files.additionalInspections1,
                inspectionPhotos1: req.files.inspectionPhotos1,
                name2: req.body.name2,
                licensed2: req.body.licensed2,
                insured2: req.body.insured2,
                passedDebarment2: req.body.passedDebarment2,
                noticeofCommencement2: req.files.noticeofCommencement2,
                extensionRequest2: req.files.extensionRequest2,
                lockBoxCode2: req.body.lockBoxCode2,
                passedInspection2: req.body.passedInspection2,
                passedProgressInspection2: req.body.passedProgressInspection2,
                passedEngineerInspection2: req.body.passedEngineerInspection2,
                stateOfMichiganInspection2: req.body.stateOfMichiganInspection2,
                walkthroughSignedSpecs2: req.files.walkthroughSignedSpecs2,
                certificateOfCompletion2: req.files.certificateOfCompletion2,
                initialInspectionSpecs2: req.files.initialInspectionSpecs2,
                changeOrders2: req.files.changeOrders2,
                subcontractorCerts2: req.files.subcontractorCerts2,
                townshipPermit2: req.files.townshipPermit2,
                additionalInspections2: req.files.additionalInspections2,
                inspectionPhotos2: req.files.inspectionPhotos2,
                name3: req.body.name3,
                licensed3: req.body.licensed3,
                insured3: req.body.insured3,
                passedDebarment3: req.body.passedDebarment3,
                noticeofCommencement3: req.files.noticeofCommencement3,
                extensionRequest3: req.files.extensionRequest3,
                lockBoxCode3: req.body.lockBoxCode3,
                passedInspection3: req.body.passedInspection3,
                passedProgressInspection3: req.body.passedProgressInspection3,
                passedEngineerInspection3: req.body.passedEngineerInspection3,
                stateOfMichiganInspection3: req.body.stateOfMichiganInspection3,
                walkthroughSignedSpecs3: req.files.walkthroughSignedSpecs3,
                certificateOfCompletion3: req.files.certificateOfCompletion3,
                initialInspectionSpecs3: req.files.initialInspectionSpecs3,
                changeOrders3: req.files.changeOrders3,
                subcontractorCerts3: req.files.subcontractorCerts3,
                townshipPermit3: req.files.townshipPermit3,
                additionalInspections3: req.files.additionalInspections3,
                inspectionPhotos3: req.files.inspectionPhotos3,
            },
            homeSale: {
                application: req.files.application,
                familyForm: req.files.familyForm,
                birthCertificates: req.files.birthCertificates,
                environmentalReview: req.files.environmentalReview,
                T4506Form: req.files.T4506Form,
                IRSResponse: req.files.IRSResponse,
                IRSReturns: req.files.IRSReturns,
                taxableIncome: req.files.taxableIncome,
                payStubs: req.files.payStubs,
                annualBenefits: req.files.annualBenefits,
                oneCPD: req.files.oneCPD,
                homeConsortium: req.files.homeConsortium,
                homeCounseling: req.files.homeCounseling,
                appraisal: req.files.appraisal,
                signedClosing: req.files.signedClosing,
                signedHHAPA: req.files.signedHHAPA,
                tilPromissory: req.files.tilPromissory
            },
            paymentRecords: {
                progressApplication1: req.files.progressApplication1,
                progressInspection1: req.files.progressInspection1,
                serviceVoucher1: req.files.serviceVoucher1,
                invoice1: req.files.invoice1,
                quickbook1: req.files.quickbook1,
                swornStatement1: req.files.swornStatement1,
                conditionalWaivers1: req.files.conditionalWaivers1,

            },
            finalApplication: {
                progressApplication2: req.files.progressApplication2,
                progressInspection2: req.files.progressInspection2,
                serviceVoucher2: req.files.serviceVoucher2,
                invoice2: req.files.invoice2,
                quickbook2: req.files.quickbook2,
                swornStatement2: req.files.swornStatement2,
                conditionalWaivers2: req.files.conditionalWaivers2,
                developerFee: req.files.developerFee,
                projectPayment: req.files.projectPayment,
                swornStatements: req.files.swornStatements,
                debarmentChecks: req.files.debarmentChecks
            },
            other: {
                contractorBreakdown: req.files.contractorBreakdown,
                contractorActual: req.files.contractorActual,
                contractorAward: reqfiles.contractorAward,
                matchReport: req.files.matchReport
            }
            

        
    });

    newCase.save().then(cases => res.json(cases)); //saves to db
});

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public
router.delete('/:case_num', (req, res) => {
   Case.find({case_num: req.params.case_num})
    .then(cases => cases.remove().then(() => res.json( {success: true} ))) 
    .catch(err => res.status(404).json( {success: false} )); //id not found
});


module.exports = router;