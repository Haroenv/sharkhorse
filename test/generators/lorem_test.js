/* global describe, it */

import {expect} from 'chai';
import {create, generators} from '../../src';

describe('generators/lorem', function() {
    it('generates a paragraph', function() {
        let Message = {
            txt: generators.lorem()
        };

        let {txt} = create(Message);

        expect(txt).to.match(/[\w\s\.\,]/);
        expect(txt).to.have.length.within(100, 500);
    });

    it('generates x words', function() {
        expect(create(generators.lorem().words(10))).to.match(/[\w\s]/);
        expect(create(generators.lorem().words(10)).split(' ')).to.have.length(10);
    });

    it('generates a word', function() {
        expect(create(generators.lorem().word())).to.match(/[\w]/);
        expect(create(generators.lorem().word()).split(' ')).to.have.length(1);
    });

    it('generates multiple paragraphs or words', function() {
        let F = {txt: generators.lorem().words(5)};
        expect(create(F).txt.split(' ')).to.have.length(5);

        F = {txt: generators.lorem().paragraphs(5)};
        expect(create(F).txt.split('\n\n')).to.have.length(5);
    });


    it('generates a paragraphs or a word', function() {
        let F = {txt: generators.lorem().word};
        expect(create(F).txt).to.match(/\w/);

        F = {txt: generators.lorem().paragraph()};
        expect(create(F).txt).to.have.length.within(100, 500);
    });
});
